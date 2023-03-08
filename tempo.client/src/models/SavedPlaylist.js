export class SavedPlaylist {
  constructor(data){
    this.id = data.id
    this.playlistId = data.playlistId
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.playlist = data.playlist
  }
}