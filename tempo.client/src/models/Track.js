export class Track {
  constructor(data) {
    this.id = data.tracks.id
    this.name = data.tracks.name
    this.runtime = data.tracks.duration_seconds
    this.genre = data.tracks.genre
    this.albumImg = data.tracks.albumImg
  }
}