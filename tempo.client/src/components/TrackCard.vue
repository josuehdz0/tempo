<template>
  <div class="row text-light py-3 px-1">
    <div class="col-3">
      <img :src="playlist?.tracks[0]?.albumImg" alt="" class="img-fluid rounded">
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
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>