import axios from 'axios';

export default axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('jwt')
    },
    baseURL:'http://localhost:8080/'
    // baseURL:'http://51.68.143.121:8080/'
})
