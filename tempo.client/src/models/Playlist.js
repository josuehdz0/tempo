export class Playlist {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.tempo = data.tempo
    this.genre = data.genre
    this.totalTracks = data.totalTracks
    this.runtime = data.runtime
    this.creatorId = data.creatorId
    this.creator = data.creator
  }
}