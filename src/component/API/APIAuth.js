import axios from 'axios';

export default axios.create({
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': sessionStorage.getItem('jwt')
        'Authorization': sessionStorage.jwt



    },
    // auth:{
    // },
    // baseURL:'51.68.143.121:8080/rpg/'
    // baseURL:'http://51.68.143.121:8080/rpg/'

    baseURL: 'http://localhost:8080/'
})
