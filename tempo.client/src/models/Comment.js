export class Comment {
  constructor(data){
    this.id = data.id
    this.body = data.body
    this.creatorId = data.creatorId
    this.playlistId = data.playlistId
    this.creator = data.creator
  }
}