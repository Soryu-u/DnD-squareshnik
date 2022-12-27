import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://26.39.200.53:3002/api',
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance;
