<template>
  <div class="container-fluid">
    <div class="row justify-content-center justify-content-md-evenly">
      <div v-for="p in playlists.slice().reverse()" :key="p.id" class="col-10 col-md-5 mt-4 cardbg">

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

        <PlaylistCard :playlist="p" />





      </div>
      <div class="row mt-4 mt-md-none"></div>
    </div>
  </div>
</template>

<script>

import { onMounted, onUnmounted, computed } from "vue";
import { AppState } from "../AppState.js";
import PlaylistCard from "../components/PlaylistCard.vue";
import { api } from "../services/AxiosService";
import { playlistsService } from "../services/PlaylistsService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    async function getAllPlaylists() {
      try {
        await playlistsService.getAllPlaylists();
      } catch (error) {
        Pop.error(error, 'Getting all Playlists')
      }
    }

    // async function test(){
    //   const testing = await api.put('api/spotify/playlists', {playlistName: 'WOOO', tracks: ['spotify:track:3esPcn43N0CytAtcY9V30C', 'spotify:track:3cE5ltZFHmBpiS77itKaOM']})
    //   logger.log(`THE THING OOOOOO${testing.data}`)
    // }

    onMounted(() => {
      getAllPlaylists();
    });

    onUnmounted(() => {
      playlistsService.clearPlaylists()
    })



    return {
      playlists: computed(() => AppState.playlists),
      // async apple() {
      //   try {
      //     logger.log('hi')
      //     const res = await api.get('/api/spotify/tracks/country/140')
      //     logger.log(res)
      //   }
      //   catch (error) {
      //     logger.error(error)
      //   }
      // }

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
