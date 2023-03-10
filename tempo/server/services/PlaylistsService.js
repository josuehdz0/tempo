import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { TrackModel } from "../models/TrackModel.js"

class PlaylistsService {

  async createPlaylist(playlistData) {
    const playlist = await dbContext.Playlists.create({
      name: playlistData.name,
      tempo: playlistData.tempo,
      genre: playlistData.genre,
      runtime: playlistData.runtime,
      creatorId: playlistData.creatorId,
      tracks: this.convertToTrackModels(playlistData.tracks) // convert tracks to TrackModels
    });
    await playlist.populate('creator');
    return playlist;
  }

  convertToTrackModels(trackData) {
    return trackData.map(data => new TrackModel(data));
  }

  // async createPlaylist(playlistData) {
  //   const playlist = await dbContext.Playlists.create(playlistData)
  //   await playlist.populate('creator')
  //   return playlist
  // }

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