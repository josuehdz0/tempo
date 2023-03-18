import { Auth0Provider } from "@bcwdev/auth0provider"
import { spotifyService } from "../services/SpotifyService.js"
import BaseController from "../utils/BaseController"
// import { BadRequest } from "../utils/Errors"


export class SpotifyController extends BaseController {
    constructor(){
        super('api/spotify')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('/tracks/:genre/:tempo', this.getTracks)
        .put('/playlists', this.addPlaylist)
        
    }
    async getTracks(req, res, next) {
        try {
            const accountId = req.userInfo.id
            const genre = req.params.genre
            const tempo = req.params.tempo
            const tracks = await spotifyService.getTracks(accountId, genre, tempo)
            return res.send(tracks)
        } catch (error) {
            next(error)
        }
    }
    async addPlaylist(req, res, next) {
        try {
            const playlistData = req.body
            const userId = req.userInfo.id
            const playlist = await spotifyService.addPlaylist(playlistData, userId)
            return res.send(playlist)
        } catch (error) {
            next(error)
        }
    }
}