// import {Axios} from 'axios'
// import axios from 'axios'
import { dbContext } from '../db/DbContext'
const axios = require('axios/dist/node/axios.cjs')

// @ts-ignore
export const spotifyApi = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 8000,
    // headers:{
    //     Authorization: dbContext.Account.findById
    // }
})
