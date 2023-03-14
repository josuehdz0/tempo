import Axios from 'axios'

export const spotifyApi = Axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 8000
})
