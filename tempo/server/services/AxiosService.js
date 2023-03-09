import Axios from 'axios'
export const api = Axios.create({
    baseURL: '',
    timeout: 8000
})
