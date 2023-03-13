<template>
  <div class="row justify-content-center">
    <div class="col-10 col-md-5 mt-4 songcardbg">
      <div class="row text-light py-3 px-1">
        <div class="col-3">
          {{ track.albumImg }}
        </div>
        <div class="col-7">
          <h5>
            {{ track.name }}
          </h5>
          <div>
            By Artist
          </div>
        </div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <i class="mdi mdi-spotify spotify"></i>
        </div>
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


<style lang="scss" scoped></style>