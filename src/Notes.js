import React, {useState} from 'react';
import axios from 'axios';

const Notes = ({notes, setNotes, userId}) => {

    const API = `https://acme-users-api-rev.herokuapp.com/api/users/${userId}/notes`;
    const [noteText, setNoteText] = useState('');
    
    const submit = (ev) => {
        ev.preventDefault();
        axios.post(API, { archived: false, text: noteText })
        .then(res => {
            console.log(res.data);
            setNotes([res.data, ...notes])
        })
        .catch(ex => console.log(ex))   
    }

    return (
        <div>
            <h1> Notes Here</h1>
            <div className = 'container-sub'>
                <div className = 'add-note'>
                    <h2> Add Note</h2>
                    <form onSubmit = {(ev)=> submit(ev)}>
                        <input id = 'add-note-form' type = 'text' 
                            value = {noteText}
                            onChange = { ev => setNoteText(ev.target.value)} />
                        <br/>
                        <button>Submit</button>
                    </form>
                    <p>Reach Limit of 5 notes. Please delete a note to add more</p>
                </div>
                <div className = 'container-notes'>
                {
                notes.map( note => {
                    return (
                    <div key = {note.id}
                        className = 'note-card'>
                        {note.text}
                        <button onClick = {() => console.log(note.id)}>
                            Delete Note
                        </button>
                    </div>)
                })
                }
                </div>
            </div>
            

        </div>
    )
}

export default Notes;