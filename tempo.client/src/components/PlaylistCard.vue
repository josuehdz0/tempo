<template>
  <div class="row text-light ">
    <div @click="goToPlaylistById(playlist?.id)" class="col-4">
      <div class="row ">
        <!-- Loop through the tracks in the playlist -->
        <div v-for="(track, index) in playlist?.tracks.slice(0, 4)" :key="index" class="col-6 p-0"
          :class="playlist.tracks.length < 4 && (index === 1 || index === 3) ? 'col-12 p-0' : ''">
          <img :src="track.albumImg" alt="" class="img-fluid smallalbumcover"
            :class="index === 0 ? 'topleftphoto' : index === 2 ? 'bottomleftphoto' : ''">
        </div>
      </div>
    </div>


    <!-- <div class="col-4 p-0 d-flex justify-content-center">
        NOTE photos from unsplash
        <img :src="playlistPhotoUrl" class="img-fluid rounded playlistphoto" alt="">
        NOTE single photo from playlist
        <img :src="playlist?.tracks[0]?.albumImg" alt="" class="img-fluid rounded">
      </div> -->
    <div @click="goToPlaylistById(playlist?.id)" class="col-6 ps-3 pt-3">
      <h4>
        {{ playlist?.name }}

      </h4>
      <div>
        {{ playlist?.creator?.spotify.display_name }}
      </div>
    </div>


    <div v-if="account.id == playlist?.creatorId" class="col-2 d-flex justify-content-center align-items-center">
      <button @click="goToPlaylistById(playlist?.id)" class="btn">
        <i title="account" class="mdi mdi-account-circle trash"></i>
      </button>
    </div>

    <div v-else class="col-2 d-flex justify-content-center align-items-center">
      <button @click="likePlaylist(playlist?.id)" class="btn">
        <i
          :class="playlist.likes.find(e => e.creatorId == account.id) ? 'mdi mdi-heart heart' : 'mdi mdi-heart-outline  heart'"></i>
      </button>
      <!-- <button v-else="">
        <i class="mdi mdi-heart heart"></i>
      </button> -->
    </div>


  </div>
</template>


<script>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { AppState } from "../AppState.js";
import { Playlist } from "../models/Playlist.js";
import { router } from "../router.js";
import { likedPlaylistsService } from "../services/LikedPlaylistsService.js";
import { playlistsService } from "../services/PlaylistsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    playlist: { type: Playlist, required: true }
  },

  computed: {
    playlistPhotoUrl() {
      const genre = this.playlist?.genre || '';
      return `https://source.unsplash.com/random/?${genre},music`;
    },
  },

  setup() {
    return {
      account: computed(() => AppState.account),
      foundLiked: computed(() => AppState.likedPlaylists.find(s => s.accountId == AppState.account.id)),

      // playlists: computed(() => AppState.playlists),

      async deletePlaylist() {
        try {
          const playlistId = props.playlist.id
          logger.log('playlist Id we will delete', playlistId)
          const yes = await Pop.confirm('Are sure you sure you want to delete this playlist?')
          if (!yes) {
            return
          }
          await playlistsService.deletePlaylist(playlistId)
          router.push({ name: 'Home' })
        } catch (error) {
          Pop.error(Error, 'Removing Playlist')
        }
      },
      async likePlaylist(playlistId) {
        try {
          // logger.log('liking playlist', playlistId)
          await likedPlaylistsService.likePlaylist(playlistId);

        }
        catch (error) {
          Pop.error("[SAVE PLAYLIST]", error.message);
        }
      },

      async goToPlaylistById(playlistId) {
        // const playlist = AppState.playlist
        logger.log(playlistId)
        router.push({ name: 'PlaylistPage', params: { playlistId: playlistId } })
      },


    };
  },
  components: { RouterLink }
}
</script>


<style lang="scss" scoped>
.heart {
  color: #F48668;
  font-size: 4vh;
}

.trash {
  color: #ffffffd1;
  font-size: 4vh;
}

.playlistphoto {
  height: 10vh;
  width: 10vh;
  object-fit: cover;
}

.smallalbumcover {
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.topleftphoto {
  border-radius: 10px 0px 0px 0px;
}

.bottomleftphoto {
  border-radius: 0px 0px 0px 10px;
}

// @media screen and (min-width: 480px) {
//   .smallalbumcover {
//     height: 14vh;
//     width: 14vh;
//     object-fit: cover;
//   }
// }

// @media screen and (min-width: 1440px) {
//   .smallalbumcover {
//     height: 19vh;
//     width: 19vh;
//     object-fit: cover;
//   }
// }
</style>