<template>
  <div class="container-fluid">
    <form @submit.prevent="feelingLucky" @error="loginToSpotify()" v-if="account.id">
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label for="playlist-name" class="form-label">Playlist Name</label>
          <input v-model="editable.name" type="text" class="form-control" name="playlist-name" id="playlist-name"
            placeholder="Name your Playlist">
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label for="genre" class="form-label">Genre</label>
          <select v-model="editable.genre" class="form-select" id="genre" name="genre">
            <option value="acoustic">Acoustic</option>
            <option value="alt-rock">Alt Rock</option>
            <option value="alternative">Alternative</option>
            <option value="bossanova">Bossa Nova</option>
            <option value="brazil">Brazil</option>
            <option value="british">British</option>
            <option value="chicago-house">Chicago House</option>
            <option value="children">Children</option>
            <option value="country">Country</option>
            <option value="dance">Dance</option>
            <option value="disco">Disco</option>
            <option value="disney">Disney</option>
            <option value="dubstep">Dubstep</option>
            <option value="edm">EDM</option>
            <option value="electronic">Electronic</option>
            <option value="emo">Emo</option>
            <option value="funk">Funk</option>
            <option value="gospel">Gospel</option>
            <option value="happy">Happy</option>
            <option value="hard-rock">Hard Rock</option>
            <option value="heavy-metal">Heavy Metal</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="house">House</option>
            <option value="indian">Indian</option>
            <option value="indie">Indie</option>
            <option value="indie-pop">Indie Pop</option>
            <option value="j-rock">J-Rock</option>
            <option value="jazz">Jazz</option>
            <option value="latin">Latin</option>
            <option value="latino">Latino</option>
            <option value="metal">Metal</option>
            <option value="party">Party</option>
            <option value="pop">Pop</option>
            <option value="progressive-house">Progressive House</option>
            <option value="psych-rock">Psych Rock</option>
            <option value="punk">Punk</option>
            <option value="punk-rock">Punk Rock</option>
            <option value="r-n-b">R&B</option>
            <option value="reggae">Reggae</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="rock">Rock</option>
            <option value="rock-n-roll">Rock 'n' Roll</option>
            <option value="rockabilly">Rockabilly</option>
            <option value="romance">Romance</option>
            <option value="salsa">Salsa</option>
            <option value="samba">Samba</option>
            <option value="ska">Ska</option>
            <option value="soul">Soul</option>
            <option value="spanish">Spanish</option>
            <option value="summer">Summer</option>
            <option value="synth-pop">Synth Pop</option>
            <option value="techno">Techno</option>
            <option value="work-out">Workout</option>

          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label v-if="editable.tempo" for="pace" class="form-label">Pace: {{ convertToTime((editable.tempo - 250) /
            (-10)) }}/mile
          </label>
          <label v-else="" for="pace" class="form-label">Pace: 10'00" /mile</label>
          <div>
            <input v-model="editable.tempo" type="range" class="pace-range" min="100" max="200" step="5" list="values">
            <datalist id="values">

              <option label="15">15</option>
              <!-- <option value="110" label="14">14</option>
              <option value="120" label="13">13</option>
              <option value="130" label="12">12</option>
              <option value="140" label="11">11</option> -->
              <option label="10">10</option>
              <!-- <option value="160" label="9">9</option>
              <option value="170" label="8">8</option>
              <option value="180" label="7">7</option>
              <option value="190" label="6">6</option> -->
              <option label="5">5</option>

            </datalist>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10 d-flex justify-content-between">
          <button type="submit" class="btn btn-outline-dark">Tracks</button>
          <!-- <button class="btn btn-outline-dark">Create</button> -->
          <button class="btn btn-outline-dark">Feeling Lucky</button>
        </div>
      </div>
    </form>
    <div v-else class="row justify-content-center">
      <div class="col-10 col-md-4 m-4 ">
        <h3>
          Login and Link account to Spotify to Create New playlists
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
import { computed, ref } from "vue";
import { AppState } from "../AppState.js";
import { AuthService } from '../services/AuthService'
import { logger } from "../utils/Logger";
import { api } from "../services/AxiosService";
import { playlistsService } from "../services/PlaylistsService.js";



export default {
  setup() {


    const editable = ref({})
    editable.value.tempo = editable?.value.tempo || 150

    return {
      editable,
      account: computed(() => AppState.account),

      convertToTime(decimalNum) {
        // Separate the integer and decimal parts
        const minutes = Math.floor(decimalNum);
        const seconds = Math.round((decimalNum - minutes) * 60);

        // Format the result as minute:second string
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const timeString = `${minutes}'${formattedSeconds}"`;

        return timeString;
      },

      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },

      async feelingLucky() {
        try {
          logger.log(editable.value, 'form Data')
          await playlistsService.createPlaylist(editable.value)

        }
        catch (error) {
          logger.error(error)
        }
      },

      // NOTE Use this for testing if spotify is getting tracks
      async apple() {
        try {
          logger.log('hi')
          const res = await api.get('/api/spotify/tracks/country/140')
          logger.log(res)
        }
        catch (error) {
          logger.error(error)
        }
      },

    }
  }
}
</script>


<style lang="scss" scoped>
.pace-range {
  width: 100%;
}

datalist {
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  // writing-mode: vertical-lr;
  width: 75vw;
}
</style>