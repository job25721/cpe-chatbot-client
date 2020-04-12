import axios from 'axios'

export default axios.create({
    // baseURL : 'http://localhost:5000',
    baseURL : 'https://cpechatbotv1.herokuapp.com/', //production build
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})