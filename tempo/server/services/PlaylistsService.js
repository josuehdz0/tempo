import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { TrackModel } from "../models/TrackModel.js"

class PlaylistsService {

  async deletePlaylistById(playlistId) {
    const deletedPlaylist = await dbContext.Playlists.findByIdAndDelete(playlistId);
    if (!deletedPlaylist) {
      throw new BadRequest('playlist not found');
    }
    return deletedPlaylist;
  }
  
  async createPlaylist(playlistData) {
    if (playlistData.tempo < 54 || playlistData.tempo > 209) {
      throw new BadRequest('Tempo value is out of range');
    }
    let tracks = playlistData.tracks.map(data => new TrackModel(data))
    let totalRuntime = 0
    tracks.forEach(e => {
      if(e.id.length != 22){
        throw new BadRequest('Invalid track id')
      }
      totalRuntime += Number(e.duration_seconds)
    });

    const playlist = await dbContext.Playlists.create({
      name: playlistData.name,
      tempo: playlistData.tempo,
      genre: playlistData.genre,
      runtime: Number(totalRuntime),
      creatorId: playlistData.creatorId,
      tracks: tracks
    });
    await playlist.populate('creator', 'id spotify.display_name spotify.external_urls.spotify spotify.followers spotify.images');
    return playlist;
  }

  async getAllPlaylists() {
    const playlists = await dbContext.Playlists.find()
      .populate('creator', 'id spotify.display_name spotify.external_urls.spotify spotify.followers spotify.images')
    return playlists
  }

  async getPlaylistById(playlistId) {
    const playlist = await dbContext.Playlists.findById(playlistId).populate('creator', 'id spotify.display_name spotify.external_urls.spotify spotify.followers spotify.images')
    if (!playlist) {
      throw new BadRequest('playlist not found')
    }
    return playlist
  }
}

export const playlistsService = new PlaylistsService()