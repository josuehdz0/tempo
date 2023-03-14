<template>
  <router-link class="" :to="{ name: 'PlaylistPage', params: { playlistId: playlist?.id } }">
    <div class="row text-light py-3 px-1">
      <div class="col-4 p-0 d-flex justify-content-center">

        <img :src="playlistPhotoUrl" class="img-fluid rounded playlistphoto" alt="">
        <!-- <img :src="playlist?.tracks[0]?.albumImg" alt="" class="img-fluid rounded"> -->
      </div>
      <div class="col-6 ps-0">
        <h4>
          {{ playlist?.name }}

        </h4>
        <div>
          {{ playlist?.creator.spotify.display_name }}
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <i class="mdi mdi-heart heart"></i>
      </div>
    </div>

  </router-link>
</template>


<script>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { AppState } from "../AppState.js";
import { Playlist } from "../models/Playlist.js";
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
      // playlists: computed(() => AppState.playlists),

      async deletePlaylist() {
        const playlistId = props.playlist.id
        logger.log('playlist Id we will delete', playlistId)
        const yes = await Pop.confirm('Are sure you sure you want to delete this playlist?')
        if (!yes) {
          return
        }
        try {
          await playlistsService.deletePlaylist(playlistId)
        } catch (error) {
          Pop.error(Error, 'Removing Playlist')
        }
      }


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

.playlistphoto {
  height: 10vh;
  width: 10vh;
  object-fit: cover;
}
</style>