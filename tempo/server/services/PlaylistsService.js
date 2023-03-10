import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { TrackModel } from "../models/TrackModel.js"

class PlaylistsService {

  async createPlaylist(playlistData) {
    if (playlistData.tempo < 50 || playlistData.tempo > 209) {
      throw new BadRequest('Tempo value is out of range');
    }
    let tracks = playlistData.tracks.map(data => new TrackModel(data))
    tracks.forEach(e => {
      if(e.id.lenth != 22){
        throw new BadRequest('Invalid track id')
      }
    });
    const playlist = await dbContext.Playlists.create({
      name: playlistData.name,
      tempo: playlistData.tempo,
      genre: playlistData.genre,
      runtime: playlistData.runtime,
      creatorId: playlistData.creatorId,
      tracks: tracks
    });
    await playlist.populate('creator');
    return playlist;
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