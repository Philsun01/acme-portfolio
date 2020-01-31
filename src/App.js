import React, {useState, useEffect} from 'react';
import fetchUser from './fetchUser';
import UserHeader from './UserHeader';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [vacations, setVacations] = useState([]);

  const newUser = ()=>{
    fetchUser().then(res=>setUser(res));
  }

  useEffect(()=> newUser(), []);

  useEffect(()=>{
    console.log('Loaded a new user');
    console.log(user);
  }, [user])

  return (
    <div className="App">
      <UserHeader user = {user} newUser = {newUser}/>
      

      
      
    </div>
  );
}

export default App;
