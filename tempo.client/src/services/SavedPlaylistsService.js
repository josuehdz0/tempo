import { logger } from "../utils/Logger"

class SavedPlaylistsService {

  async savePlaylist(playlistData){
    const res = await api.post('api/savedPlaylists', playlistData)
    logger.log("[SAVING PLAYLIST]", res.data)
  }

}

export const savedPlaylistsService = new SavedPlaylistsService()