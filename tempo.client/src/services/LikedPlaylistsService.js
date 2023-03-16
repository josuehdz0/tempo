import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class LikedPlaylistsService {

  async likePlaylist(playlistId) {
    const res = await api.post(`api/playlists/${playlistId}/likes`)
    logger.log("[LIKING PLAYLIST]", res.data)
  }

}

export const likedPlaylistsService = new LikedPlaylistsService()