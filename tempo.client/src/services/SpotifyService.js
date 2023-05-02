import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { profilesService } from "./ProfilesService"

class SpotifyService {

    async login() {
        const scopes = 'user-top-read playlist-modify-public'
        // NOTE This is the live deploy site. If wanting to run locally, must change to localhost:8080...
        const redirect_uri = 'https://tempo-yn8x.onrender.com'
        // const redirect_uri = 'http://localhost:8080/'

        let popup = window.open(`https://accounts.spotify.com/authorize?client_id=${AppState.client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`, 'Login with Spotify', 'width=800,height=600')
        const check = await window.open('', 'Login with Spotify')
        const intervalId = setInterval(async () => {
            if (check.location.hash) {
                clearInterval(intervalId)
                const access_token = check.location.hash.substr(1).split('&')[0].split("=")[1]
                popup.close()
                let res = await fetch('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                })
                const data = await res.json()
                AppState.account.spotify = data
                AppState.account.spotify.access_token = access_token
                const account = AppState.account
                profilesService.editProfile(account)
            }
        }, 500)
    }

}

export const spotifyService = new SpotifyService()