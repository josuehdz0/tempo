<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 py-3 sticky-top">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <i class="mdi mdi-metronome"></i>
      <b>
        TEMPO

      </b>
    </router-link>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse d-md-flex justify-content-md-end" id="navbarText">
      <!-- NOTE Navebar for mobile is here -->
      <div class="row justify-content-between d-md-none">
        <div class="col-3 d-flex align-items-center">
          <ul class="navbar-nav  ">
            <li>
              <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase">
                About
              </router-link>
            </li>
          </ul>
        </div>



        <div v-if="account.id" class="col-6 text-center my-2 data-bs-toggle" aria-label="Link to Spotify">
          <SpotifyLogin />
        </div>

        <div class="col-3 text-center d-flex justify-content-center">
          <!-- LOGIN COMPONENT HERE -->
          <Login />
        </div>




      </div>

      <!-- NOTE Desktop Nav is here -->
      <div class="d-none d-md-flex justify-content-end">

        <button class="btn">
          <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase" data-bs-toggle="collapse"
            data-target=".navbar-collapse">
            About
          </router-link>
        </button>




        <div v-if="account.id" class="text-center" aria-label="Link to Spotify">

          <SpotifyLogin />

        </div>
        <div class="d-flex">
          <!-- LOGIN COMPONENT HERE -->
          <Login />
        </div>



      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import Login from './Login.vue'
import SpotifyLogin from "./SpotifyLogin.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
    }
  },
  components: { Login, SpotifyLogin }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid black;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
