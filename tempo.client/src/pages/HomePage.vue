<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">

      <!-- NOTE This is where the playlistcard Component goes -->
      <PlaylistCard />





    </div>
  </div>
</template>

<script>
import PlaylistCard from "../components/PlaylistCard.vue";

export default {
  setup() {
    return {};
  },
  components: { PlaylistCard }
}
</script>

<style scoped lang="scss">
.tempobg {
  background-color: #9DBF9e;
}

.cardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.heart {
  color: #F48668;
  font-size: 4vh;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
