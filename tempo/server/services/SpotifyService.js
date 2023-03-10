import { dbContext } from "../db/DbContext.js"
import { TrackModel } from "../models/TrackModel.js"
import { BadRequest } from "../utils/Errors"
import { spotifyApi } from "./AxiosService.js"


class SpotifyService{
    async getTracks(accountId, genre, tempo) {
        const Account = await dbContext.Account.findById(accountId)
        if(!Account){
            throw new BadRequest('NO ACCOUNT DUDE!')
        }
            const req = await spotifyApi.get('/recommendations',
            {params: 
                {seed_artists:'', seed_genres:genre, seed_tracks: '',
                limit: 10, max_tempo:tempo, min_tempo: tempo -1,
                min_popularity: 35},
                headers: {Authorization:`Bearer ${Account.spotify.access_token}`}
            })
        const tracksData = req.data
        const tracks = {tracks: tracksData.tracks.map(e => new TrackModel(e)),
                        genre: tracksData.seeds[0].id}
        return tracks
    }

    



}

export const spotifyService = new SpotifyService()