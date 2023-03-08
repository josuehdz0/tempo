import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PlaylistsService {
  async createPlaylist(playlistData) {
    const playlist = await dbContext.Playlists.create(playlistData)
    await playlist.populate('creator')
    return playlist
  }
  async getAllPlaylists() {
    const playlists = await dbContext.Playlists.find()
      .populate('creator')
    return playlists
  }

  async getPlaylistById(playlistId) {
    const playlist = await dbContext.Playlists.findById(playlistId).populate('creator')
    if (!playlist) {
      throw new BadRequest('playlist not found')
    }
  }





}

export const playlistsService = new PlaylistsService()