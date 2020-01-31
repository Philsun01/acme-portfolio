import React, {useState, useEffect} from 'react';
import fetchUser from './fetchUser';
import fetchData from './fetchData';
import UserHeader from './UserHeader';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([{id:'123',text:'words'}]);
  const [vacations, setVacations] = useState([]);
  const [companies, setCompanies] = useState([]);

  const newUser = ()=>{
    fetchUser().then(res=>{
      setUser(res);
      fetchData(res.id).then(({notes, companies, vacations})=>
        {
          setNotes(notes.data); console.log(notes.data);
          setVacations(vacations.data); console.log(companies.data);
          setCompanies(companies.data); console.log(vacations.data);
        });
    })
  }

  useEffect(()=> newUser(), []);

  return (
    <div className="App">
      <UserHeader user = {user} newUser = {newUser}/>
      <div className = 'container'>
          <div className = 'section'> 
            <h3>Notes</h3> 
            <p> You have {notes.length} notes.</p> 
          </div>
          <div className = 'section'> 
            <h3>Vacations Section</h3>
            <p> You have {vacations.length} vacations.</p> 
          </div>
          <div className = 'section'>
            <h3>Following Companies</h3>
            <p> You are following {companies.length} companies.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
