<template>
  <div v-if="account.id" class="container-fluid">
    <div class="row justify-content-center mt-4">
      <!-- NOTE Profile Details card -->
      <div class="col-10 col-md-5 bigcardbg">
        <div class="row">
          <div class="col-6 d-flex justify-content-center  align-items-center p-3">
            <img :src="account.picture" :alt="account.name" class="profile-img ">
          </div>
          <div class="col-6 p-3  align-items-center text-light">
            <div>
              <h2 class="">
                {{ account.name }}
              </h2>
            </div>
            <div>
              <b>
                Total Playlists: 0

              </b>
            </div>
            <div>
              <b>

                Favorite Genre: Ska
              </b>
            </div>
            <div>
              <b>

                Average BPM: 125
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NOTE Buttons for saved and liked playlists -->
    <div class="row mt-4 justify-content-center">
      <div class="col-12 col-md-5 d-flex justify-content-evenly text-light">
        <div class="btn text-light filter-btn">
          <h3>

            My Playlists
          </h3>
        </div>
        <div class="btn text-light filter-btn">
          <h3>
            Saved Playlists

          </h3>
        </div>
      </div>
    </div>
    <!-- NOTE Playlists -->
    <div class="row justify-content-center">
      <div class="col-10 col-md-5 cardbg">

        <!-- FIXME need to add prop and vfor to this card -->

        <!-- <PlaylistCard /> -->
      </div>
    </div>
  </div>

  <div v-else class="container-fluid">
    <div class="row justify-content-center mt-4">
      <div class="col-10 col-md-4 m-4 ">
        <h3 class="text-center">
          Login to see your Profile
        </h3>
        <div class="d-flex justify-content-center">
          <button class="btn btn-light m-3">
            <h3 @click="login">
              Login here
            </h3>
          </button>

        </div>
      </div>

    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import PlaylistCard from "../components/PlaylistCard.vue";
import { AuthService } from '../services/AuthService'
import { playlistsService } from "../services/PlaylistsService";
import { profilesService } from "../services/ProfilesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {

    const route = useRoute()


    async function getPlaylistsByCreatorId() {
      try {
        logger.log("[PROFILE ID]", route.params.profileId)
        await profilesService.getPlaylistsByCreatorId(route.params.profileId)
      } catch (error) {
        Pop.error("[GET PLAYLISTS BY CREATOR ID]", error.message)
      }
    }

    onMounted(() => {

      getPlaylistsByCreatorId()
    })

    return {
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    };
  },
  components: { PlaylistCard }
}
</script>


<style lang="scss" scoped>
.cardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bigcardbg {
  background-color: #2b4141d4;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.filter-btn {
  font-size: 15pt;
}

.profile-img {
  border-radius: 10px;
  max-width: 16vh;
  max-height: 16vh;
}

img {
  // max-width: 100px;
  // max-width: 100px;
  object-fit: cover;
}
</style>