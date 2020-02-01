import axios from 'axios';

const fetchData = async (userId) => {
    
    const API = `https://acme-users-api-rev.herokuapp.com/api/users/${userId}`;
    
    const notesAPI = axios.get(`${API}/notes`);
    const companiesAPI = axios.get(`${API}/followingCompanies`);
    const vacationsAPI = axios.get(`${API}/vacations`);
    
    const [notes, companies, vacations] = await Promise.all([notesAPI, companiesAPI, vacationsAPI])
    
    return {notes, companies, vacations};

}

export default fetchData;