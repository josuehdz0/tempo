export class Playlist {
  constructor(data) {
    this.name = data.name
    this.tracks = data.tracks
    this.tempo = data.tracksInfo ? 
    data.tracksInfo.tempo : data.tempo
    
    this.genre = data.tracksInfo ?
    data.tracksInfo.genre : data.genre
  }
}