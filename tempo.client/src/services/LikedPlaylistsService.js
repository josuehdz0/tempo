import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class LikedPlaylistsService {

  async likePlaylist(playlistId) {
    const res = await api.delete(`api/playlists/${playlistId}/likes`)
    logger.log("[LIKING PLAYLIST]", res.data)
    const playlist = AppState.playlists.find(p => p.id == playlistId)
    // logger.log(playlist)
    const check = playlist.likes.findIndex(e => e.creatorId == AppState.account.id)
    logger.log(check)
    if(check != -1){
      playlist.likes.splice(check, 1)
    }else{
      playlist.likes.push({creatorId: AppState.account.id, playlistId})
    }
    // AppState.playlists = res.data
  }

}

export const likedPlaylistsService = new LikedPlaylistsService()