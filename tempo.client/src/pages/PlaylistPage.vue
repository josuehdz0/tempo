<template>
  <div class="container-fluid">

    <!-- NOTE Playlist Info -->
    <div class="row justify-content-center">
      <div class="col-10 col-md-5 my-5 bigcardbg">

        <div class="row text-light py-3 px-1">
          <div class="col-6">
            picture
          </div>
          <div class="col-6">
            <h2>
              {{ playlist?.name }}
              Playlist Name
            </h2>
            <div>
              By {{ playlist?.creator?.spotify.display_name }}
            </div>
            <div>
              Runtime: {{ playlist.runtime }} ms
            </div>
            <div>
              Tempo:{{ playlist.tempo }} bpm
            </div>
            <div class="text-end">
              <i class="mdi mdi-heart heart"></i>

            </div>
          </div>

        </div>


      </div>
    </div>

    <!-- NOTE Song Card goes here -->
    <div class="row justify-content-center">
      <div class="col-10 col-md-5 mt-4 songcardbg">
        <div class="row text-light py-3 px-1">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <h5>
              Song Name
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

    <!-- NOTE Comment form will go here -->
    <div v-if="account.id" class="row justify-content-center">
      <div class="col-10 col-md-5 m-4 songcardbg">
        <div class="form-floating mt-4 mx-2">
          <textarea required class="form-control" placeholder="Leave a comment here" id="body" style="height: 100px"
            name="body"></textarea>
          <label for="floatingTextarea2" class="ps-4 text-secondary">What do you think about this playlist?</label>
        </div>
        <div class=" d-flex justify-content-end mx-2">
          <button type="submit" class="btn btn-outline-light my-3 ">Post Comment</button>
        </div>
      </div>
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-10 col-md-4 m-4 text-center">
        <button class="btn btn-outline-light">
          <h3 @click="login">
            Login to post a comment
          </h3>
        </button>
      </div>
    </div>

    <!-- NOTE Comments will populate here -->
    <div class="row justify-content-center ">

      <div class="col-10 col-md-5 mb-4">
        <div class="row text-light py-3 px-1 border-2 border-bottom">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <div class="d-flex ">
              <div>
                <b class="myfont">
                  Account Name
                </b>
                <span class="timetext ">
                  3h
                </span>
              </div>
            </div>

            <div>
              Comment Body
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <i class="mdi mdi-heart heart"></i>
          </div>
        </div>

        <div class="row text-light py-3 px-1 border-2 border-bottom">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <div class="d-flex ">
              <div>
                <b class="myfont">
                  Account Name
                </b>
                <span class="timetext ">
                  3h
                </span>
              </div>
            </div>

            <div>
              Comment Body
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <i class="mdi mdi-heart heart"></i>
          </div>
        </div>

        <div class="row text-light py-3 px-1 border-2 border-bottom">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <div class="d-flex ">
              <div>
                <b class="myfont">
                  Account Name
                </b>
                <span class="timetext ">
                  3h
                </span>
              </div>
            </div>

            <div>
              Comment Body
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <i class="mdi mdi-heart heart"></i>
          </div>
        </div>

      </div>

      <!-- NOTE duplicate comments -->
      <!-- <div class="col-10 col-md-7 mb-4">
        <div class="row text-light py-3 px-1 border-2 border-bottom">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <div class="d-flex ">
              <div>
                <b class="myfont">
                  Account Name
                </b>
                <span class="timetext ">
                  3h
                </span>
              </div>
            </div>

            <div>
              Comment Body
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <i class="mdi mdi-heart heart"></i>
          </div>
        </div>

      </div>

      <div class="col-10 col-md-7 mb-4">
        <div class="row text-light py-3 px-1 border-2 border-bottom">
          <div class="col-3">
            picture
          </div>
          <div class="col-7">
            <div class="d-flex ">
              <div>
                <b class="myfont">
                  Account Name
                </b>
                <span class="timetext ">
                  3h
                </span>
              </div>
            </div>

            <div>
              Comment Body
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <i class="mdi mdi-heart heart"></i>
          </div>
        </div>

      </div> -->

    </div>



  </div>
</template>


<script>
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { router } from "../router";
import { AuthService } from '../services/AuthService'
import { playlistsService } from "../services/PlaylistsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {

    const route = useRoute()
    const router = useRouter();

    async function getPlaylistById() {
      try {
        const playlistId = route.params.playlistId
        await playlistsService.getPlaylistById(playlistId)
      } catch (error) {
        Pop.error(error, "Getting playlist by ID ERROR");
        router.push("/")
      }
    }

    watchEffect(() => {
      if (route.params.playlistId) {
        getPlaylistById()
      }
    })

    return {
      account: computed(() => AppState.account),
      playlist: computed(() => AppState.playlist),


      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.bigcardbg {
  background-color: #2b4141e1;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.heart {
  color: #F48668;
  font-size: 4vh;
}

.spotify {

  font-size: 7vh;
}

.myfont {
  font-size: large;
}

.timetext {
  color: rgba(255, 255, 255, 0.579);
}

.ourbtn {
  background: #6290C3;
}

.songcardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>