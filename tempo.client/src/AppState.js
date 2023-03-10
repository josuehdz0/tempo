import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/SavedPlaylist.js').SavedPlaylist[]} */
  savedPlaylists: [],
  /** @type {import('./models/Playlist.js').Playlist{}} */
  playlist: {},
  /** @type {import('./models/Playlist.js').Playlist[]} */
  playlists: [],
  /** @type {import('./models/Comment.js').Comment[]} */
  comment: [],
  client_id: '319433e8f4a84da190d7994e53a254fc',
})
