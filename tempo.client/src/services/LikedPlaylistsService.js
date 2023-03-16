import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class LikedPlaylistsService {

  async likePlaylist(playlistId) {
    //FIXME - CHANGE POST PATH AFTER RICHY BUILDS IT
    const res = await api.post(`api/posts/${playlistId}/like`)
    logger.log("[LIKING PLAYLIST]", res.data)
  }

}

export const likedPlaylistsService = new LikedPlaylistsService()