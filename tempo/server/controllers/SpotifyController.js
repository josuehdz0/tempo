import { Auth0Provider } from "@bcwdev/auth0provider"
import { spotifyService } from "../services/SpotifyService.js"
import BaseController from "../utils/BaseController"
import { logger } from "../utils/Logger.js"


export class SpotifyController extends BaseController {
    constructor(){
        super('api/spotify')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('/tracks/:genre/:tempo', this.getTracks)
        
        
    }
    async getTracks(req, res, next) {
        try {
            const accountId = req.userInfo.id
            const genre = req.params.genre
            const tempo = req.params.tempo
            const tracks = await spotifyService.getTracks(accountId, genre, tempo)
            logger.log(tracks)
            return res.send(tracks)
        } catch (error) {
            next(error)
        }
    }
}