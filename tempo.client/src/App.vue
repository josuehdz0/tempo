<template>
  <header class="sticky-top">
    <Navbar />
  </header>
  <main class="tempoblobs ">

    <router-view />

  </main>
  <footer class="bg-light text-dark d-flex justify-content-evenly align-items-center py-4 sticky-bottom">


    <Footer></Footer>

  </footer>
</template>

<script>


import { computed } from 'vue'
import { router } from '../src/router.js'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account),

      getMyProfile() {
        const account = AppState.account
        router.push({ name: 'Profile', params: { profileId: account.id } })
      }
    }
  },
  components: { Navbar, Footer }
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
