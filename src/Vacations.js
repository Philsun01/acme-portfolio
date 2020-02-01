import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';

const Vacations = ({vacations, setVacations, userId}) => {
    const [vac, setVac] = useState({startDate: '', endDate: ''});
    const API = `https://acme-users-api-rev.herokuapp.com/api/users/${userId}/vacations`;
    
    const submit = (ev) => {
        ev.preventDefault();
        axios.post(API, vac)
        .then(res => {
            console.log(res);
            setVacations([res,...vacations]);
        })
        .catch(ex => console.log(ex))
    }

    const deleteVacation = (vacId) => {
        axios.delete(`${API}/${vacId}`)
        .then(res => console.log(res))
        const newVac = vacations.filter(vac => vac.id !== vacId);
        setVacations(newVac);
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
                                value = {vac.startDate}
                                onChange = { ev => setVac({...vac, startDate: ev.target.value})} />
                            <br/>
                            <label> End Date </label>
                            <input type = 'text' 
                                value = {vac.endDate}
                                onChange = { ev => setVac({...vac, endDate: ev.target.value})} />
                            <br/>
                            <button>Submit</button>
                        </form>
                        <p>Max Limit of 3 Vacations.</p>
                    </div>
                    <div className = 'container-notes'>
                        {
                        vacations.map( vacation => {
                            return (
                                <div key ={vacation.id} className = 'note-card'>
                                    <div> Start Date: {moment(vacation.startDate).format('dddd MM/DD/YYYY')} </div>
                                    <div> End Date: {moment(vacation.endDate).format('dddd MM/DD/YYYY')} </div>
                                    <div> {moment(vacation.endDate).diff(moment(vacation.startDate),'days')} Days long</div>
                                    <button onClick = {()=>deleteVacation(vacation.id)}> Delete this Vacation</button> 
                                </div>
                            )})
                        }
                    </div>
                    
            </div>
        </div>
    )
}

export default Vacations;