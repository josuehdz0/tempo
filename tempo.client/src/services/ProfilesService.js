import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"
import { Playlist } from "../models/Playlist.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {

  async getProfileById(profileId) {
    const res = await api.get('api/profiles/' + profileId)
    logger.log('getting profile', res.data)
    AppState.profile = new Profile(res.data)
  }


  async getPlaylistsByCreatorId(creatorId){
    const res = await api.get(`api/profiles/${creatorId}/playlists`)
    logger.log('[PLAYLISTS BY CREATOR ID, serve]', res.data)
    // logger.log(creatorId,"creatorId in service")
    AppState.playlists = res.data.map(p => new Playlist(p))
  }


  async editProfile(profileData) {
    logger.log(profileData, 'this is the data')
    const res = await api.put('/account', profileData)
    logger.log(res.data, 'Results?')
    AppState.account = res.data
  }

  async getProfileById(profileId){
    const res = await api.get('api/profiles/' + profileId)
    logger.log('getting profile from service', res.data)
    AppState.profile = new Profile(res.data)
  }

  clearProfile() {
    AppState.profile = null
  }



}
export const profilesService = new ProfilesService()