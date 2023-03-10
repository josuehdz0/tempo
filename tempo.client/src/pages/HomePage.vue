<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">
      <div class="col-10 col-md-5 mt-4 cardbg">

        <!-- NOTE This is where the playlistcard Component goes -->
        <!-- <div class="col-10 col-md-5 mt-4 cardbg">
        <div class="row text-light py-3 px-1">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <h2>
              Playlist Name
            </h2>
            <div>
              By (playlist creator)
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <i class="mdi mdi-heart heart"></i>
          </div>
        </div>
      </div> -->
        <PlaylistCard />





      </div>
    </div>
  </div>
</template>

<script>

import { onMounted } from "vue";
import PlaylistCard from "../components/PlaylistCard.vue";
import { api } from "../services/AxiosService";
import { logger } from "../utils/Logger";

export default {
  setup() {

    return {
      async apple() {
        try {
          logger.log('hi')
          const res = await api.get('/api/spotify/tracks/country/140')
          logger.log(res)
        }
        catch (error) {
          logger.error(error)
        }
      }

    }
  },
  components: { PlaylistCard }
}
</script>

<style scoped lang="scss">
.cardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
