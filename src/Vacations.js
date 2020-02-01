import React, {useState} from 'react';
import moment from 'moment';

const Vacations = ({vacations}) => {
    const [vac, setVac] = useState({start: '', end: ''});

    const submit = (ev) => {
        ev.preventDefault();
        console.log(vac)
    }

    return (
        <div>
            <h1> Vacations </h1>
            <div className = 'container-sub'>
                <div className = 'add-note'>
                        <h2> Add Note</h2>
                        <form onSubmit = {(ev)=> submit(ev)}>
                            <label> Start Date </label>
                            <input type = 'text' 
                                value = {vac.start}
                                onChange = { ev => setVac({...vac, start: ev.target.value})} />
                            <br/>
                            <label> End Date </label>
                            <input type = 'text' 
                                value = {vac.end}
                                onChange = { ev => setVac({...vac, end: ev.target.value})} />
                            <br/>
                            <button>Submit</button>
                        </form>
                        <p>Max Limit of 3 Vacations.</p>
                    </div>
                {
                vacations.map( vacation => {
                    return (
                        <div key ={vacation.id} className = 'note-card'>
                            <div> Start Date: {moment(vacation.startDate).format('dddd MM/DD/YYYY')} </div>
                            <div> End Date: {moment(vacation.endDate).format('dddd MM/DD/YYYY')} </div>
                            <div> {moment(vacation.endDate).diff(moment(vacation.startDate),'days')} Days long</div> 
                        </div>
                    )})
                }    
            </div>
        </div>
    )
}

export default Vacations;