<template>
  <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
    <div>
      <b>
        <h3 class="mdi mdi-home" title="home"></h3>
      </b>
    </div>
  </router-link>


  <div v-if="account.id" @click="getMyProfile()">
    <b>

      <h3 class="mdi mdi-account" title="profile"></h3>
    </b>
  </div>
  <div v-else>
    <Login />
  </div>



  <router-link class="navbar-brand d-flex" :to="{ name: 'CreatePlaylist' }">
    <div>
      <b>
        <h3 class="mdi mdi-plus-circle" title="create"></h3>

      </b>
    </div>
  </router-link>
</template>


<script>
import { computed } from 'vue'
import { router } from '../router.js'
import { AppState } from '../AppState.js'


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
  }
}
</script>


<style lang="scss" scoped></style>