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
      fetchData(res.id).then(res=>{
        console.log(res.data);
        setNotes(res.data);
      });
    })
  }

  useEffect(()=> newUser(), []);

  useEffect(()=>{
    //console.log('Loaded a new user');
    //console.log(user);
  }, [user])

  useEffect( ()=>{
      //console.log(user);
    //if(Boolean(user.id)){
      //console.log(`fetching from userId ${user.Id}`);
      //fetchData(user.id).then(res=>setNotes(res));
    //}
  },[user])

  return (
    <div className="App">
      <UserHeader user = {user} newUser = {newUser}/>
      <div>for reference {user.id}</div>
      <div className = 'notes'>
        <h2> Notes Section ({notes.length}) </h2>
        {
         notes.map((note, idx)=> <div key = {idx}> {note.text} </div>)
        }

      </div>
      

  
    </div>
  );
}

export default App;
