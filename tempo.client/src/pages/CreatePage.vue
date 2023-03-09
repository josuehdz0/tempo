<template>
  <div class="container-fluid">
    <form v-if="account.id">
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label for="playlist-name" class="form-label">Playlist Name</label>
          <input type="text" class="form-control" name="playlist-name" id="playlist-name"
            placeholder="What is your playlist called?">
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label for="genre" class="form-label">Genre</label>
          <select class="form-select" id="genre" name="genre">
            <option value="random">Random</option>
            <option value="rock">Rock</option>
            <option value="country">Country</option>
            <option value="edm">EDM</option>
            <option value="classical">Classical</option>
            <option value="jazz">Jazz</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <label for="pace" class="form-label">Pace (per mile)</label>
          <div>
            <input type="range" class="pace-range" min="5" max="30" step="1" list="values">
            <!-- <datalist id="values">
              <option value="5" label="5">5</option>
              <option value="10" label="10">10</option>
              <option value="15" label="15">15</option>
              <option value="20" label="20">20</option>
              <option value="25" label="25">25</option>
              <option value="30" label="30">30</option>
            </datalist> -->
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-10 d-flex justify-content-between">
          <button class="btn btn-outline-dark">Tracks</button>
          <button class="btn btn-outline-dark">Create</button>
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
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { AuthService } from '../services/AuthService'

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
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
.pace-range {
  width: 100%;
}

// datalist {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   writing-mode: vertical-lr;
//   width: 75vw;
// }
</style>