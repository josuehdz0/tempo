import Axios from 'axios'
import { dbContext } from '../db/DbContext'
export const spotifyApi = Axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 8000,
    // headers:{
    //     Authorization: dbContext.Account.findById
    // }
})
