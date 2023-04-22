import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Profile|null} */
  profile: null,
  /** @type {import('./models/Playlist.js').Playlist[]} */
  myPlaylists: [],
  /** @type {import('./models/LikedPlaylist.js').LikedPlaylist[]} */
  likedPlaylists: [],
  /** @type {import('./models/Playlist.js').Playlist{}} */
  playlist: {},
  /** @type {import('./models/Playlist.js').Playlist[]} */
  playlists: [],
  /** @type {import('./models/Comment.js').Comment[]} */
  comment: [],
  // NOTE This was changed from Haydens to Josue's Spotify dev account for deployment. Any spotify account that are interested in using app, must be added to Josue's dev account since still in developer mode. 
  client_id: 'c64a7707e8a84d889a159981f7fb4a4a',

})
