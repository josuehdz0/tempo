<template>
  <div class="container-fluid">

    <!-- NOTE Playlist Info -->
    <div class="row justify-content-center">
      <div class="col-10 col-md-5 my-5 bigcardbg">

        <div class="row text-light justify-content-between ">


          <div class="col-6">
            <div class="row ">
              <!-- NOTE Loop through the tracks in the playlist for photos-->
              <div v-for="(track, index) in playlist?.tracks.slice(0, 4)" :key="index" class="col-6 p-0"
                :class="playlist.tracks.length < 4 && (index === 1 || index === 3) ? 'col-12 p-0' : ''">
                <img :src="track.albumImg" alt="" class="img-fluid smallalbumcover"
                  :class="index === 0 ? 'topleftphoto' : index === 2 ? 'bottomleftphoto' : ''">
              </div>
            </div>
          </div>



          <div class="col-6 p-2 d-flex flex-column justify-content-between">

            <div class="row">
              <b class="">
                {{ playlist?.name }}
              </b>
              <!-- <div @click="goToProfileByCreatorId()">
                By {{ playlist?.creator?.spotify.display_name }}
              </div> -->
              <div>
                Tempo: {{ playlist?.tempo }} bpm
              </div>
              <div>
                Runtime: {{ convertToTime(playlist?.runtime / 60) }}
              </div>
            </div>

            <div class="row justify-content-between ">

              <div class="col-8 p-0 d-flex align-items-center ">
                <div @click="addPlaylistToSpotify()" v-if="account.id" class="btn text-light d-flex">
                  <div class="fs-5">
                    Add to&nbsp;
                  </div>
                  <i title="spotify" class="mdi mdi-spotify fs-4">
                  </i>
                </div>
              </div>

              <div class="col-4 p-0 d-flex justify-content-center">

                <div v-if="account.id == playlist?.creatorId" class="text-end ">
                  <button @click="deletePlaylist()" class="btn p-0">
                    <i class="mdi mdi-trash-can heart"></i>
                  </button>
                </div>

                <div v-else class="text-end ">
                  <!-- NOTE add "@click="likePlaylist(playlist.id)"" to this button later -->
                  <button v-if="!foundLiked" class="btn p-0">
                    <i class="mdi mdi-heart-outline heart"></i>
                  </button>
                  <button v-else>
                    <i class="mdi mdi-heart heart"></i>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>


      </div>
    </div>

    <!-- NOTE Track Card goes here -->

    <div v-for="t in tracks" :key="t.id" class="row justify-content-center">
      <TrackCard :track="t" />

    </div>

    <!-- NOTE Comment form will go here -->
    <!-- <div v-if="account.id" class="row justify-content-center">
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
    </div> -->

    <!-- NOTE Comments will populate here -->
    <!-- <div class="row justify-content-center ">
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


    </div> -->

    <div class="row py-3">
      <!-- NOTE this is padding to add space between last trackcard and footer -->
    </div>


  </div>
</template>


<script>
import { computed, watchEffect } from "vue";
import TrackCard from "../components/TrackCard.vue";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { router } from "../router";
import { AuthService } from '../services/AuthService'
import { playlistsService } from "../services/PlaylistsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { likedPlaylistsService } from "../services/LikedPlaylistsService";
import { api } from "../services/AxiosService.js";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();



    async function getPlaylistById() {
      try {
        const playlistId = route.params.playlistId;
        await playlistsService.getPlaylistById(playlistId);
      }
      catch (error) {
        Pop.error(error, "Getting playlist by ID ERROR");
        router.push("/");
      }
    }
    watchEffect(() => {
      if (route.params.playlistId) {
        getPlaylistById();
      }
    });
    return {
      account: computed(() => AppState.account),
      playlist: computed(() => AppState.playlist),
      tracks: computed(() => AppState.playlist?.tracks),
      likedPlaylists: computed(() => AppState.likedPlaylists),
      foundLiked: computed(() => AppState.likedPlaylists.find(s => s.accountId == AppState.account.id)),

      async deletePlaylist() {
        try {
          const playlistId = AppState.playlist.id
          logger.log('playlist Id we will delete', playlistId)
          const yes = await Pop.confirm('Are sure you sure you want to delete this playlist?')
          if (!yes) {
            return
          }
          await playlistsService.deletePlaylist(playlistId)
          router.push({ name: 'Home' })
        } catch (error) {
          Pop.error(Error, 'Removing Playlist')
        }
      },

      goToProfileByCreatorId() {
        const creatorId = AppState.playlist.creatorId
        router.push({ name: 'Profile', params: { profileId: creatorId } })
      },
      // NOTE Use this function to create playlist on spotify
      async addPlaylistToSpotify() {
        try {
          const spotifyTrackArray = AppState.playlist.tracks.map((t) => "spotify:track:" + t.id)
          logger.log(spotifyTrackArray, "right format?")
          const testing = await api.put('api/spotify/playlists', { playlistName: `${AppState.playlist.name}`, tracks: spotifyTrackArray })
          Pop.toast('Added to Spotify', 'success')
        } catch (error) {
          Pop.error(Error, 'Removing Playlist')
        }

      },


      // NOTE like a playlist
      async likePlaylist(playlistId) {
        try {
          logger.log('liking playlist')
          await likedPlaylistsService.likePlaylist(playlistId);
        }
        catch (error) {
          Pop.error("[SAVE PLAYLIST]", error.message);
        }
      },
      convertToTime(decimalNum) {
        // Separate the integer and decimal parts
        const minutes = Math.floor(decimalNum);
        const seconds = Math.round((decimalNum - minutes) * 60);
        // Format the result as minute:second string
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const timeString = `${minutes}m ${formattedSeconds}s`;
        return timeString;
      },
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      }
    };
  },
  components: { TrackCard }
}
</script>


<style lang="scss" scoped>
.bigcardbg {
  background-color: #2b4141e1;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.topleftphoto {
  border-radius: 10px 0px 0px 0px;
}

.bottomleftphoto {
  border-radius: 0px 0px 0px 10px;
}

.heart {
  color: #F48668;
  font-size: 4vh;
}

.spotify {

  font-size: 7vh;
}

.smallalbumcover {
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.rowheight {
  height: auto;
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

@media screen and (min-width: 480px) {
  .smallalbumcover {
    height: 14vh;
    width: 14vh;
    object-fit: cover;
  }
}

@media screen and (min-width: 1440px) {
  .smallalbumcover {
    height: 19vh;
    width: 19vh;
    object-fit: cover;
  }
}
</style>