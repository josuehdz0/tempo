<template>
  <router-link class="" :to="{ name: 'PlaylistPage', params: { playlistId: playlist.id } }">
    <div class="row text-light py-3 px-1">
      <div class="col-3">
        picture
        <img :src="playlist?.tracks[0].albumImg" alt="" class="img-fluid eventimg rounded">
      </div>
      <div class="col-7">
        <h2>
          {{ playlist?.name }}

        </h2>
        <div>
          {{ playlist?.creator.spotify.display_name }}
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
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

export default {
  props: {
    playlist: { type: Playlist, required: true }
  },

  setup() {
    return {
      // playlists: computed(() => AppState.playlists),
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
</style>