export class TrackModel{
    constructor(data){
        this.id = data.id,
        this.url = data.external_urls.spotify || data.url
        this.name = data.name
        this.popularity = data.popularity
        this.duration_seconds = ((data.duration_ms / 1000).toFixed(0))
        this.artistName = data.artists[0].external_urls.spotify
        this.albumImg = data.album.images[0].url
    }
}
