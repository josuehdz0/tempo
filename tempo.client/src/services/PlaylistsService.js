import { AppState } from "../AppState.js"
import { Playlist } from "../models/Playlist.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PlaylistsService {
  async createPlaylist(playlistForm) {
    // debugger
    const res = await api.get(`/api/spotify/tracks/${playlistForm.genre}/${playlistForm.tempo}`)
    logger.log(res.data, 'res data on create playlist service')
    let newPlaylist = new Playlist(res.data)
    newPlaylist.name = playlistForm.name

    logger.log('newPlaylist playlistsservice line 13', newPlaylist)
    await api.post('/api/playlists', newPlaylist)


    logger.log(newPlaylist, 'this is the playlist object from the api POST request')


    AppState.playlists.unshift(newPlaylist.data)
    AppState.playlist = newPlaylist.data
    return
  }

  async getAllPlaylists() {
    const res = await api.get('api/playlists')
    logger.log('Here are the playlists', res.data)

    const playlists = res.data.map(p => new Playlist(p))
    AppState.playlists = playlists
  }

  async getPlaylistById(playlistId) {
    AppState.playlist = null
    const res = await api.get('api/playlists/' + playlistId)
    logger.log(res.data, "this is the single playlist ID")
    AppState.playlist = new Playlist(res.data)
  }
}

export const playlistsService = new PlaylistsService()

// const dude =
// {
//   "name": "test",
//   "tempo": 132,
//   "genre": "afrobeat",
//   "tracks": [
//     {
//       "id": "3pDhN3qB33AOPhQEkUCaWt",
//       "url": "https://open.spotify.com/track/3pDhN3qB33AOPhQEkUCaWt",
//       "name": "Limbo",
//       "popularity": 73,
//       "duration_seconds": "225",
//       "artistName": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m",
//       "albumImg": "https://i.scdn.co/image/ab67616d0000b27329866617908a958f41917d76"
//     }
//   ]
// }


