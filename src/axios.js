import axios from 'axios';


const instance = axios.create({
    baseURL: "http://localhost:5001/clone-ab647/us-central1/api"
})


export default instance