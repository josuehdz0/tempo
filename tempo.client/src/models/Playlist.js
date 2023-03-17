export class Playlist {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.tracks = data.tracks
    this.runtime = data.runtime
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.likes = data.likes
    this.tempo = data.tracksInfo ? 
    data.tracksInfo.tempo : data.tempo
    
    this.genre = data.tracksInfo ?
    data.tracksInfo.genre : data.genre
  }
}