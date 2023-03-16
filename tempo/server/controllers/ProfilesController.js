import { profileService } from '../services/ProfileService.js'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from "@bcwdev/auth0provider";
import { playlistsService } from "../services/PlaylistsService.js";


export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id/playlists', this.getPlaylistsByProfile)
  }

  async getPlaylistsByProfile(req, res, next) {
    try {
      const profileId = req.params.id
      const myPlaylists = await playlistsService.getPlaylistsByProfile(profileId)
      return res.send(myPlaylists)
    } catch (error) {
      next(error)
    }
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }
}
