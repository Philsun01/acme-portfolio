import React from 'react';

const Vacations = ({vacations}) => {
    console.log(vacations)
    return (
        <div>
            <h1> Vacations </h1>
            {
            vacations.map( vacation => {
                return (
                    <div key ={vacation.id}> {vacation.startDate} </div>

                )})
            }    
            
        </div>
    )
}

export default Vacations;