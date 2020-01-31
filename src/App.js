import React, {useState, useEffect} from 'react';
import fetchUser from './fetchUser';
import fetchData from './fetchData';
import UserHeader from './UserHeader';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([{id:'123',text:'words'}]);
  //const [vacations, setVacations] = useState([]);
  //const [companies, setCompanies] = useState([]);

  const newUser = ()=>{
    fetchUser().then(res=>{
      setUser(res);
      fetchData(res.id).then(({notes, companies, vacations})=>
        {
          console.log(notes.data);
          setNotes(notes.data);
          console.log(companies.data);

          console.log(vacations.data);
        });
    })
  }

  useEffect(()=> newUser(), []);

  return (
    <div className="App">
      <UserHeader user = {user} newUser = {newUser}/>
      <div>for reference {user.id}</div>
      <div className = 'container'>
        <div className = 'notes'>
          <h2> Notes Section ({notes.length}) </h2>
          {
          notes.map(note=> <div key = {note.id}> {note.text} </div>)
          }
        </div>


      </div>
      
      

  
    </div>
  );
}

export default App;
