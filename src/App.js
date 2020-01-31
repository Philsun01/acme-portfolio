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
    fetchUser().then(res=>setUser(res));
  }

  useEffect(()=> newUser(), []);

  useEffect(()=>{
    console.log('Loaded a new user');
    console.log(user);
  }, [user])

  useEffect( ()=>{
    
    if(user.id !== 'undefined'){
      console.log(`fetching from userId ${user.Id}`);
      //fetchData(user.id).then(res=>setNotes(res));
    }
  },[user])

  return (
    <div className="App">
      <UserHeader user = {user} newUser = {newUser}/>
      <div>{user.id}</div>
      <div className = 'notes'>
        <h2> Notes Section </h2>
        {
         notes.map((note, idx)=> <div key = {idx}> Hello</div>)
        }

      </div>
      

  
    </div>
  );
}

export default App;
