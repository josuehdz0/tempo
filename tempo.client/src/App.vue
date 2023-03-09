<template>
  <header class="sticky-top">
    <Navbar />
  </header>
  <main class="tempoblobs ">

    <router-view />

  </main>
  <footer class="bg-light text-dark d-flex justify-content-evenly align-items-center py-4 sticky-bottom">

    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div>
        <b>
          HOME
        </b>
      </div>
    </router-link>

    <router-link class="navbar-brand d-flex" :to="{ name: 'Profile' }">
      <div>
        <b>
          PROFILE
        </b>
      </div>
    </router-link>
    <router-link class="navbar-brand d-flex" :to="{ name: 'CreatePlaylist' }">
      <div>
        <b>
          CREATE
        </b>
      </div>
    </router-link>


  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.tempobg {
  background-color: #9DBF9e;
}

.tempoblobs {
  background-image: url("tempoblobs.png");
  background-size: cover;
  background-position: center;
  background-color: #9DBF9e;
  // object-fit: cover;
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
