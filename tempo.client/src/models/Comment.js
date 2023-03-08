export class Comment {
  constructor(data){
    this.body = data.body
    this.creatorId = data.creatorId
    this.playlistId = data.playlistId
    this.creator = data.creator
  }
}