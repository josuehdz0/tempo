import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class LikedPlaylistsService {

  async likePlaylist(playlistData){
    const res = await api.post('api/likedPlaylists', playlistData)
    logger.log("[LIKING PLAYLIST]", res.data)
  }

}

export const likedPlaylistsService = new LikedPlaylistsService()