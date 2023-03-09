import { Auth0Provider } from "@bcwdev/auth0provider"
import { spotifyApi } from "../services/AxiosService"
import BaseController from "../utils/BaseController"


export class SpotifyController extends BaseController {
    constructor(){
        super('api/spotify')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('/tracks', this.getTracks)
        
        
    }
    getTracks(req, res, next) {
        try {
            spotifyApi.get()
        } catch (error) {
            next(error)
        }
    }
}