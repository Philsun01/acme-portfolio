import axios from 'axios';

const fetchData = async (userId) => {
    console.log(`fetching from userId ${userId}`);
    const API = `https://acme-users-api-rev.herokuapp.com/api/users/${userId}/notes`;
    
    const notes = await axios.get(API)
        .then(res=>console.log(res.data))
        .catch(ex=>console.log(ex));

}

export default fetchData;