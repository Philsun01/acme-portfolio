import React, {useState, useEffect} from 'react';
import fetchUser from './fetchUser';
import fetchData from './fetchData';
import UserHeader from './UserHeader';
import Notes from './Notes';
import Vacations from './Vacations';
import FollowingCompanies from './FollowingCompanies';
import Home from './Home';
import qs from 'qs';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([{id:'123',text:'words'}]);
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);

  const getHash = ()=> {
    return window.location.hash.slice(1);
  }
  const [ params, setParams ] = useState(qs.parse(getHash()));

  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      console.log(qs.parse(getHash()));
      setParams(qs.parse(getHash()));
    });
    if(['home','notes','vacations','followingcompanies'].includes(qs.parse(getHash()).view)){
      setParams(qs.parse(getHash()));
    } else {
      setParams({view: 'home'})
    }
  }, []);

  const newUser = ()=>{
    fetchUser().then(res=>{
      setUser(res);
      fetchData(res.id).then(({notes, companies, vacations})=>
        {
          setNotes(notes.data); //console.log(notes.data);
          setVacations(vacations.data); //console.log(companies.data);
          setFollowingCompanies(companies.data); //console.log(vacations.data);
        });
    })
  }

  useEffect(()=> newUser(), []);

  return (
    <div className="App">
      <UserHeader user = {user} newUser = {newUser}/>
      {params.view !== 'home' && <a href = {'#view=home'}>Go Back</a> }
      {params.view === 'home' && <Home notesQty = {notes.length}
            vacationsQty = {vacations.length}
            companiesQty = {followingCompanies.length} />}
      {params.view === 'notes' && <Notes notes = {notes}/>}
      {params.view === 'vacations' && <Vacations vacations = {vacations}/>}
      {params.view === 'followingcompanies' && <FollowingCompanies followingCompanies = {followingCompanies}/>}

    </div>
  );
}

export default App;
