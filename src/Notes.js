import React from 'react';

const Notes = ({notes}) => {

    return (
        <div>
            <h1> Notes Here</h1>
            {
                notes.map( note => {
                    return (<div key = {note.id}>
                        {note.text}
                    </div>)
                })
            }
            

        </div>
    )
}

export default Notes;