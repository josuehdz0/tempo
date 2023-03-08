<template>
  <div class="col-10 col-md-5 mt-4 cardbg">
    <div class="row text-light py-3 px-1">
      <div class="col-3">
        picture
      </div>
      <div class="col-7">
        <h2>
          {{ playlist?.name }}
          Playlist Name
        </h2>
        <div>
          By {{ playlist?.creator.name }} Creator
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
        <i class="mdi mdi-heart heart"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { Playlist } from "../models/Playlist";

export default {
  props: {
    playlist: { type: Playlist, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.heart {
  color: #F48668;
  font-size: 4vh;
}
</style>