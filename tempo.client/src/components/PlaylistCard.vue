<template>
  <router-link class="" :to="{ name: 'PlaylistPage' }">
    <div class="row text-light py-3 px-1">
      <div class="col-3">
        picture
      </div>
      <div class="col-7">
        <h2>

          Playlist Name
        </h2>
        <div>
          By Creator
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <i class="mdi mdi-heart heart"></i>
      </div>
    </div>

  </router-link>
</template>


<script>
import { RouterLink } from "vue-router";
import { Playlist } from "../models/Playlist";

export default {
  props: {
    playlist: { type: Playlist, required: true }
  },
  setup() {
    return {};
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