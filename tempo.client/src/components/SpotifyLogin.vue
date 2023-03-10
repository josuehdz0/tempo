<template>
    <button @click="loginToSpotify()" class="btn btn-outline-dark m-2">
        Link to <i class="mdi mdi-spotify"></i>
    </button>
</template>


<script>
import { spotifyService } from '../services/SpotifyService'

export default {
    setup() {
        return {
            async loginToSpotify() {
                spotifyService.login()
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>