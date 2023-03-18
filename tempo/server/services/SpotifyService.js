import { dbContext } from "../db/DbContext.js"
import { TrackModel } from "../models/TrackModel.js"
import { BadRequest } from "../utils/Errors"
import { logger } from "../utils/Logger.js"
import { spotifyApi } from "./AxiosService.js"

class SpotifyService{
    async getTracks(accountId, genre, tempo) {
        const Account = await dbContext.Account.findById(accountId)
        if(!Account){
            throw new BadRequest('NO ACCOUNT DUDE!')
        }

        let artist = ''
        let track = ''

        switch(genre){
            case 'acoustic':
                artist = '3GBPw9NK25X1Wt2OUvOwY3';
                track = '5jgFfDIR6FR0gvlA56Nakr';
                break;
            case 'alt-rock':
                artist = '0L8ExT028jH3ddEcZwqJJ5';
                track = '70LcF31zb1H0PyJoS1Sx1r';
                break;
            case 'alternative':
                artist = '3AA28KZvwAUcZuOKwyblJQ';
                track = '5ghIJDpPoe3CfHMGu71E6T';
                break;
            case 'bossanova':
                artist = '3pO5VjZ4wOHCMBXOvbMISG';
                track = '3898C4AbdbptwYet6547e5';
                break;
            case 'brazil':
                artist = '3pO5VjZ4wOHCMBXOvbMISG';
                track = '4JA89bJXOUl8OaGDkrhaoi';
                break;
            case 'british':
                artist = '3PhoLpVuITZKcymswpck5b';
                track = '1eT2CjXwFXNx6oY5ydvzKU';
                break;
            case 'chicago-house':
                artist = '63yl9nDNrHpiAYGlNJxxjc';
                track = '3YXIVMQLRRq2K7kxC7UYx6';
                break;
            case 'children':
                artist = '1Vvvx45Apu6dQqwuZQxtgW';
                track = '5ygDXis42ncn6kYG14lEVG';
                break;
            case 'country':
                artist = '6roFdX1y5BYSbp60OTJWMd';
                track = '0ZUo4YjG4saFnEJhdWp9Bt';
                break;
            case 'dance':
                artist = '3fMbdgg4jU18AjLCKBhRSm';
                track = '12XS8xxdJpQIYmenVvTSOY';
                break;
            case 'disco':
                artist = '0LcJLqbBmaGUft1e9Mm8HV';
                track = '5ubvP9oKmxLUVq506fgLhk';
                break;
            case 'disney':
                artist = '5sy77gt4bfsLcSQ8GIe4ZZ';
                track = '4Y8vb1uy9IjM2V1hqvrAid';
                break;
            case 'dubstep':
                artist = '5he5w2lnU9x7JFhnwcekXX';
                track = '7Em0GU0uX7BzhIzy7V5D9I';
                break;
            case 'edm':
                artist = '64KEffDW9EtZ1y2vBYgq8T';
                track = '62h4GYm6aTqS0dsfJtKYIX';
                break;            
            case 'electronic':
                    artist = '4tZwfgrHOc3mvqYlEYSvVi';
                    track = '0b6wdul3A5sQNpIOv03OxP';
                    break;
                case 'emo':
                    artist = '7FBcuc1gsnv6Y1nwFtNRCb';
                    track = '1JdKrFyoU05abww0Zv0ayQ';
                    break;
                case 'funk':
                    artist = '7GaxyUddsPok8BuhxN6OUW';
                    track = '2dCmGcEOQrMQhMMS8Vj7Ca';
                    break;
                case 'gospel':
                    artist = '6QBUIuGCAJSAtefEY1EEdB';
                    track = '0uRporX6H1WGladduLCK1I';
                    break;
                case 'happy':
                    artist = '2RdwBSPQiwcmiDo9kixcl8';
                    track = '60nZcImufyMA1MKQY3dcCH';
                    break;
                case 'hard-rock':
                    artist = '711MCceyCBcFnzjGY4Q7Un';
                    track = '08mG3Y1vljYA6bvDt4Wqkj';
                    break;
                case 'heavy-metal':
                    artist = '2ye2Wgw4gimLv2eAKyk1NB';
                    track = '54bm2e3tk8cliUz3VSdCPZ';
                    break;
                case 'hip-hop':
                    artist = '5me0Irg2ANcsgc93uaYrpb';
                    track = '7sZDbHZiuHEzS00vzCuhqS';
                    break;
                case 'house':
                    artist = '63yl9nDNrHpiAYGlNJxxjc';
                    track = '1pKYYY0dkg23sQQXi0Q5zN';
                    break;
                case 'indian':
                    artist = '4uE9TgBW0AaPDHL1qYbtd0';
                    track = '2gYBPrmIsGwIy7wILyfqtm';
                    break;
                case 'indie':
                    artist = '3kjuyTCjPG1WMFCiyc5IuB';
                    track = '0hDQV9X1Da5JrwhK8gu86p';
                    break;
                case 'indie-pop':
                    artist = '5BvJzeQpmsdsFp4HGUYUEx';
                    track = '0W4Kpfp1w2xkY3PrV714B7';
                    break;
                case 'j-rock':
                    artist = '4VrqQQy6X0hlMtqY5gp6Wx';
                    track = '0bxQJT41DNyJ92QPMpo2v7';
                    break;     
                case 'jazz':
                        artist = '0kbYTNQb4Pb1rPbbaF0pT4';
                        track = '1YQWosTIljIvxAgHWTp7KP';
                        break;
                    case 'latin':
                        artist = '6GI52t8N5F02MxU0g5U69P';
                        track = '2aEeghgUcnu75tzcolFMfs';
                        break;
                    case 'latino':
                        artist = '4wLXwxDeWQ8mtUIRPxGiD6';
                        track = '6habFhsOp2NvshLv26DqMb';
                        break;
                    case 'metal':
                        artist = '6mdiAmATAx73kdxrNrnlao';
                        track = '6EPRKhUOdiFSQwGBRBbvsZ';
                        break;
                    case 'party':
                        artist = '3sgFRtyBnxXD5ESfmbK4dl';
                        track = '7Cp69rNBwU0gaFT8zxExlE';
                        break;
                    case 'pop':
                        artist = '3fMbdgg4jU18AjLCKBhRSm';
                        track = '3S2R0EVwBSAVMd5UMgKTL0';
                        break;
                    case 'progressive-house':
                        artist = '2CIMQHirSU0MQqyYHq0eOx';
                        track = '31NiyZrUd1r4icY7xkvnWv';
                        break;
                    case 'psych-rock':
                        artist = '0k17h0D3J5VfsdmQ1iZtE9';
                        track = '0wJoRiX5K5BxlqZTolB2LD';
                        break;
                    case 'punk':
                        artist = '3RGLhK1IP9jnYFH4BRFJBS';
                        track = '6ITuEsxEy2qPhqMowdDAeI';
                        break;
                    case 'punk-rock':
                        artist = '1co4F2pPNH8JjTutZkmgSm';
                        track = '22ea9e9wspXjaR7qfqfsdS';
                        break;
                    case 'r-n-b':
                        artist = '3koiLjNrgRTNbOwViDipeA';
                        track = '4eHbdreAnSOrDDsFfc4Fpm';
                        break;
                    case 'reggae':
                        artist = '2QsynagSdAqZj3U9HgDzjD';
                        track = '3PQLYVskjUeRmRIfECsL0X';
                        break;
                    case 'reggaeton':
                        artist = '4q3ewBCX7sLwd24euuV69X';
                        track = '228BxWXUYQPJrJYHDLOHkj';
                        break;
                    case 'rock':
                        artist = '36QJpDe2go2KgaRleHCDTp';
                        track = '5CQ30WqJwcep0pYcV4AMNc';
                        break;
                        case 'rock-n-roll':
                            artist = '293zczrfYafIItmnmM3coR';
                            track = '2QfiRTz5Yc8DdShCxG1tB2';
                            break;
                        case 'rockabilly':
                            artist = '6kACVPfCOnqzgfEF5ryl0x';
                            track = '5d6ZRqgbz26Sg4bk1oifQw';
                            break;
                        case 'romance':
                            artist = '3rfgbfpPSfXY40lzRK7Syt';
                            track = '2qhASBzpbFhPRtrnZ5lLnz';
                            break;
                        case 'salsa':
                            artist = '2weA6hhVqTIN2gSn9PUB9U';
                            track = '73uEbChpBB29ttwVnwuNVE';
                            break;
                        case 'samba':
                            artist = '0RSWHhBUwW7lhCqXqxKxWN';
                            track = '6ZMrpXuvDO8T13QVrshXlL';
                            break;
                        case 'ska':
                            artist = '6xnvNmSzmeOE1bLKnYXKW3';
                            track = '49slT7gVW0zj1KIG8w6DoL';
                            break;
                        case 'soul':
                            artist = '7nwUJBm0HE4ZxD3f5cy5ok';
                            track = '0KOE1hat4SIer491XKk4Pa';
                            break;
                        case 'spanish':
                            artist = '4etuCZVdP8yiNPn4xf0ie5';
                            track = '2FOuBaYMmG6BWD6lQP6OHQ';
                            break;
                        case 'summer':
                            artist = '7CajNmpbOovFoOoasH2HaY';
                            track = '5TULlxHavZxZDYzFDcZCas';
                            break;
                        case 'synth-pop':
                            artist = '2ycnb8Er79LoH2AsR5ldjh';
                            track = '1TfqLAPs4K3s2rJMoCokcS';
                            break;
                        case 'techno':
                            artist = '0ISxyAhfop0MoMeAUw72RN';
                            track = '0e8C9dPERvvARURkNOFrrC';
                            break;
                        case 'work-out':
                            artist = '7dGJo4pcD2V6oG8kP0tJRR';
                            track = '2KH16WveTQWT6KOG9Rg6e2';
                            break;
        }

        const req = await spotifyApi.get('/recommendations?',
            {params: 
                {
                    seed_artists:artist, 
                    seed_genres:genre, 
                    seed_tracks:track,
                    limit:10, 
                    max_tempo:tempo, 
                    min_tempo:tempo-5,
                    min_popularity:1
                },
                headers: {
                    Authorization: `Bearer ${Account.spotify.access_token}`
                }
                
            })

        let tracksData = req.data

        let ids = ""
        let audioFeatures = []
        for (let i = 0; i < tracksData.tracks.length; i++) {
        ids += tracksData.tracks[i].id + ","
        }
        ids = ids.slice(0, -1) // remove the last comma
        const req2 = await spotifyApi.get('/audio-features/',{
            params:{ids:ids},headers: {Authorization: `Bearer ${Account.spotify.access_token}`}            
        })
        audioFeatures = req2.data
        for (let i = 0; i < tracksData.tracks.length; i++){
            tracksData.tracks[i].tempo = audioFeatures.audio_features[i].tempo
            tracksData.tracks[i].artistName = tracksData.tracks[i].artists[0].name
            tracksData.tracks[i].artistId = tracksData.tracks[i].artists[0].id
        }

        let totalTime = 0
        tracksData.tracks.forEach(e => totalTime += e.duration_ms)
        const tracks = {tracks: tracksData.tracks.map(e => new TrackModel(e)),
                        tracksInfo: {
                            genre: tracksData.seeds[1].id,
                            // tempo: tempo,
                            totalRuntime: (`${Math.floor((totalTime / (1000 * 60 * 60)) % 24)}:${Math.floor((totalTime / (1000 * 60)) % 60)}:${Math.floor((totalTime / 1000) % 60)}`),
                            totalRuntime_ms: totalTime

                            
                        }
                    }                    


        tracks.tracks[0].tempo = tracksData.tracks[0].artists[0].name

        // let ids = ""
        // let audioFeatures = []
        // for (let i = 0; i < tracks.tracks.length; i++) {
        // ids += tracks.tracks[i].id + ","
        // }
        // ids = ids.slice(0, -1) // remove the last comma
        // const req2 = await spotifyApi.get('/audio-features/',{
        //     params:{ids:ids},headers: {Authorization: `Bearer ${Account.spotify.access_token}`}            
        // })
        // audioFeatures = req2.data
        // for (let i = 0; i < tracks.tracks.length; i++){
        //     tracks.tracks[i].tempo = audioFeatures.audio_features[i].tempo
        // }

        return tracks

    }

    async addPlaylist(playlistData, userId) {
        const usersData = await dbContext.Account.findById(userId)
        if(!usersData){
            throw new BadRequest("user is not logged in")
        }
        const usersSpotifyId = usersData.spotify.id
        const playlist = await spotifyApi.post(`/users/${usersSpotifyId}/playlists`, {name: playlistData.playlistName}, {
            headers: {Authorization: `Bearer ${usersData.spotify.access_token}`, 'Content-Type': 'application/json'}, 
        })
        const playlistId = playlist.data.id
        // playlistData.tracks.forEach(e => {
        //     e = `spotify:track:${e},`
        // })
        // tracksStr = tracksStr.split('').splice(-1, 1).join('')
        await spotifyApi.post(`/playlists/${playlistId}/tracks`, {uris: playlistData.tracks}, 
        {
            headers: {Authorization: `Bearer ${usersData.spotify.access_token}`, 'Content-Type': 'application/json'}, 
        })
        return "COMPLETED"
    }
    


}

export const spotifyService = new SpotifyService()


