import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NODE_ENV !== 'production' ? `http://localhost:3002/api` : `https://dnd-squareshnik-server.onrender.com/api`,
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance;
