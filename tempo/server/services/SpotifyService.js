import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors"
import { spotifyApi } from "./AxiosService.js"


class SpotifyService{
    async getTracks(genre, tempo) {
        // const Account = await dbContext.Account.findById(accountId)
        // if(!Account){
        //     throw new BadRequest('NO ACCOUNT DUDE!')
        // }
            const req = await spotifyApi.get('/recommendations',
            {params: 
                {seed_artists:'', seed_genres:genre, seed_tracks: '',
                limit: 10, max_tempo:tempo, min_tempo: tempo -1,
                min_popularity: 35},
                headers: {Authorization:`Bearer BQAcgqsGUdGUJ8T1flDZR3JusDX2KM0tLfAx6IFNT13L5c0CiJwm1soZwZbOpcIA8GKCToq_FLfF-ON31IxND8eY_DICUoWgta7b9rXg4kBhRd3CX11SJgov_iKQWbqOMfHnnrx_yFj-uKnHD58qTKnv4cviE8KRot_RXBQFSmPoAWcOEKvoPDDMx9iotk6t35RcD4pNAiGk`}
            })
        return req.data
    }



}

export const spotifyService = new SpotifyService()