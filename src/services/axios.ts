import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3002',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, (error) => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    if(error.response && error.response.status === 401) {
        console.warn('User not login')
    }
})

export default axiosInstance



