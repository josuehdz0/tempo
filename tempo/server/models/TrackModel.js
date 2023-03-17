export class TrackModel{
    constructor(data){
        this.id = data.id,
        this.url = data.external_urls ? data.external_urls.spotify : data.url
        this.name = data.name
        this.popularity = data.popularity
        this.duration_seconds = data.duration_ms ? ((data.duration_ms / 1000).toFixed(0)) : data.duration_seconds
        // this.artistName = data.artists[0].external_urls.spotify
        this.artistURL = data.artists ? data.artists[0].external_urls.spotify : data.artistURL
        this.albumImg = data.album ? data.album.images[0].url : data.albumImg
        this.tempo = data.tempo || null
    }
}
