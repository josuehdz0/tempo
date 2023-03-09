<template>
    <button @click="login()">Login to Spotify</button>
</template>


<script>
import { onMounted, ref } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'


export default {
    setup() {
        const token = ref('')
        onMounted(() => {
            token.value = window.location.hash.substr(1).split('&')[0].split("=")[1]
            if (token.value) {
                window.opener.spotifyCallback(token.value)
            }else{
                window.close()
            }
        })
        return {
            scopes: 'user-top-read',
            redirect_uri: 'http://localhost:8080/',
            async login() {
                let popup = window.open(`https://accounts.spotify.com/authorize?client_id=${AppState.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`, 'Login with Spotify', 'width=800,height=600')
                window.spotifyCallback = async (payload) => {
                    popup.close()
                    let res = await fetch('https://api.spotify.com/v1/me',{
                        headers: {
                            'Authorization': `Bearer ${payload}`
                        }}
                    )
                    const data = await res.json()
                    // logger.log('callback',payload)
                    // NOTE this is where you are gonna want to store the access token to the Account
                    // AppState.account.accessToken = payload
                }
            }
        }
    },
    mounted() {

    }
}
</script>


<style lang="scss" scoped></style>