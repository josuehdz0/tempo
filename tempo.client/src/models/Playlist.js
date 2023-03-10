export class Playlist {
  constructor(data) {
    this.name = data.name
    this.tracks = data.tracks
    this.tempo = data.tracksInfo.tempo
    this.genre = data.tracksInfo.genre
  }
}