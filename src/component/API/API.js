import axios from 'axios';



export default axios.create({
    headers: {
        'Content-Type': 'application/json',


    },
    // auth:{
    // },
    // baseURL:'http://51.68.143.121:8080/rpg/'

    baseURL: 'http://localhost:8080/'
})
