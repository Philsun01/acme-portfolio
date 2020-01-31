import axios from 'axios';

const fetchData = async (userId) => {
    
    const API = `https://acme-users-api-rev.herokuapp.com/api/users/${userId}/notes`;
    
    return axios.get(API);

}

export default fetchData;