export class TrackModel{
    constructor(data){
        this.id = data.id,
        this.url = data.external_urls.spotify
        this.name = data.name
        this.popularity = data.popularity
        this.duration = data.popularity
        this.genre = data.seeds[0].type
        this.artistName = data.Artist[0].external_urls.spotify
        this.albumImg = data.album.images[0].url
    }
}
