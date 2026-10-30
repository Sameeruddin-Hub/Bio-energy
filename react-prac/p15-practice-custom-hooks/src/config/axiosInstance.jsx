import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/',

})
// Interceptors to manage the api in the middle 
// for authentication of apis
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
    }
)