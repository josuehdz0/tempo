<template>
  <div class="col-10 col-md-5 mt-4 songcardbg">
    <div class="row text-light py-3 px-1">
      <div class="col-4">
        <img :src="track.albumImg" alt="" class="img-fluid rounded">
      </div>
      <div class="col-6">
        <h5>
          {{ track.name }}
        </h5>
        <div>
          By Artist
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center pe-4">
        <a :href="track.url" target="_blank"><i class="mdi mdi-spotify spotify"></i></a>
      </div>
    </div>
  </div>
</template>


<script>
import { Track } from "../models/Track";

export default {

  props: {
    track: { type: Track, required: true }
  },

  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.spotify {

  font-size: 7vh;
}

.songcardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

a {
  text-decoration: none;
  color: white;
}
</style>