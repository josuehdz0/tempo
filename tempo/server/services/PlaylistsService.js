import { dbContext } from "../db/DbContext.js"

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

  getPlaylistById(playlistId) {

  }





}

export const playlistsService = new PlaylistsService()