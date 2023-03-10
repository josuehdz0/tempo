<template>
  <div class="container-fluid">
    <form @submit.prevent="createPlaylist" v-if="account.id">
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
            <option value="afrobeat">Afrobeat</option>
            <option value="alt-rock">Alt Rock</option>
            <option value="alternative">Alternative</option>
            <option value="ambient">Ambient</option>
            <option value="anime">Anime</option>
            <option value="black-metal">Black Metal</option>
            <option value="bluegrass">Bluegrass</option>
            <option value="blues">Blues</option>
            <option value="bossanova">Bossa Nova</option>
            <option value="brazil">Brazil</option>
            <option value="breakbeat">Breakbeat</option>
            <option value="british">British</option>
            <option value="cantopop">Cantopop</option>
            <option value="chicago-house">Chicago House</option>
            <option value="children">Children</option>
            <option value="chill">Chill</option>
            <option value="classical">Classical</option>
            <option value="club">Club</option>
            <option value="comedy">Comedy</option>
            <option value="country">Country</option>
            <option value="dance">Dance</option>
            <option value="dancehall">Dancehall</option>
            <option value="death-metal">Death Metal</option>
            <option value="deep-house">Deep House</option>
            <option value="detroit-techno">Detroit Techno</option>
            <option value="disco">Disco</option>
            <option value="disney">Disney</option>
            <option value="drum-and-bass">Drum and Bass</option>
            <option value="dub">Dub</option>
            <option value="dubstep">Dubstep</option>
            <option value="edm">EDM</option>
            <option value="electro">Electro</option>
            <option value="electronic">Electronic</option>
            <option value="emo">Emo</option>
            <option value="folk">Folk</option>
            <option value="forro">Forro</option>
            <option value="french">French</option>
            <option value="funk">Funk</option>
            <option value="garage">Garage</option>
            <option value="german">German</option>
            <option value="gospel">Gospel</option>
            <option value="goth">Goth</option>
            <option value="grindcore">Grindcore</option>
            <option value="groove">Groove</option>
            <option value="grunge">Grunge</option>
            <option value="guitar">Guitar</option>
            <option value="happy">Happy</option>
            <option value="hard-rock">Hard Rock</option>
            <option value="hardcore">Hardcore</option>
            <option value="hardstyle">Hardstyle</option>
            <option value="heavy-metal">Heavy Metal</option>
            <option value="hip-hop">Hip Hop</option>
            <option value="holidays">Holidays</option>
            <option value="honky-tonk">Honky Tonk</option>
            <option value="house">House</option>
            <option value="idm">IDM</option>
            <option value="indian">Indian</option>
            <option value="indie">Indie</option>
            <option value="indie-pop">Indie Pop</option>
            <option value="industrial">Industrial</option>
            <option value="iranian">Iranian</option>
            <option value="j-dance">J-Dance</option>
            <option value="j-idol">J-Idol</option>
            <option value="j-pop">J-Pop</option>
            <option value="j-rock">J-Rock</option>
            <option value="jazz">Jazz</option>
            <option value="k-pop">K-Pop</option>
            <option value="kids">Kids</option>
            <option value="latin">Latin</option>
            <option value="latino">Latino</option>
            <option value="malay">Malay</option>
            <option value="mandopop">Mandopop</option>
            <option value="metal">Metal</option>
            <option value="metal-misc">Metal Misc</option>
            <option value="metalcore">Metalcore</option>
            <option value="minimal-techno">Minimal Techno</option>
            <option value="movies">Movies</option>
            <option value="mpb">MPB</option>
            <option value="new-age">New Age</option>
            <option value="new-release">New Release</option>
            <option value="opera">Opera</option>
            <option value="pagode">Pagode</option>
            <option value="party">Party</option>
            <option value="philippines-opm">Philippines OPM</option>
            <option value="piano">Piano</option>
            <option value="pop">Pop</option>
            <option value="pop-film">Pop Film</option>
            <option value="post-dubstep">Post Dubstep</option>
            <option value="power-pop">Power Pop</option>
            <option value="progressive-house">Progressive House</option>
            <option value="psych-rock">Psych Rock</option>
            <option value="punk">Punk</option>
            <option value="punk-rock">Punk Rock</option>
            <option value="r-n-b">R&B</option>
            <option value="rainy-day">Rainy Day</option>
            <option value="reggae">Reggae</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="road-trip">Road Trip</option>
            <option value="rock">Rock</option>
            <option value="rock-n-roll">Rock 'n' Roll</option>
            <option value="rockabilly">Rockabilly</option>
            <option value="romance">Romance</option>
            <option value="sad">Sad</option>
            <option value="salsa">Salsa</option>
            <option value="samba">Samba</option>
            <option value="sertanejo">Sertanejo</option>
            <option value="show-tunes">Show Tunes</option>
            <option value="singer-songwriter">Singer-Songwriter</option>
            <option value="ska">Ska</option>
            <option value="sleep">Sleep</option>
            <option value="songwriter">Songwriter</option>
            <option value="soul">Soul</option>
            <option value="soundtracks">Soundtracks</option>
            <option value="spanish">Spanish</option>
            <option value="study">Study</option>
            <option value="summer">Summer</option>
            <option value="swedish">Swedish</option>
            <option value="synth-pop">Synth-Pop</option>
            <option value="tango">Tango</option>
            <option value="techno">Techno</option>
            <option value="trance">Trance</option>
            <option value="trip-hop">Trip-Hop</option>
            <option value="turkish">Turkish</option>
            <option value="work-out">Work-Out</option>
            <option value="world-music">World Music</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label for="pace" class="form-label">Pace: {{ (editable.tempo - 250) / (-10) }} minutes/mile
          </label>
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


export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      account: computed(() => AppState.account),

      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },

      async createPlaylist() {
        try {
          logger.log(editable.value, 'form Data')
          const res = await api.get(`/api/spotify/tracks/${editable.value.genre}/${editable.value.tempo}`)
          logger.log(res)
        }
        catch (error) {
          logger.error(error)
        }
      }
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