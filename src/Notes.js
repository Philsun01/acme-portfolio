import React, {useState} from 'react';

const Notes = ({notes, userId}) => {

    const API = `https://acme-users-api-rev.herokuapp.com/api/users/${userId}/notes`;
    const [text, setText] = useState('');
    
    const submit = (ev) => {
        ev.preventDefault();
        console.log('submitted');
    }

    return (
        <div>
            <h1> Notes Here</h1>
            <div className = 'container-sub'>
                <div className = 'add-note'>
                    <h2> Add Note</h2>
                    <form onSubmit = {()=> submit()}>
                        <input id = 'add-note-form' type = 'text' 
                            value = {text}
                            onChange = { ev => setText(ev.target.value)} />
                        <br/>
                        <button>Submit</button>
                    </form>
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