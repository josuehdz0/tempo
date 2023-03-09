import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { playlistsService } from "./PlaylistsService.js"

class CommentsService {
  async postComment(postData) {
    const playlist = await playlistsService.getPlaylistById(postData.playlistId)
    if (!playlist) {
      throw new BadRequest('bad request from comment service')
    }
    const comment = await dbContext.Comments.create(postData)
    await comment.populate('creator playlist')
    return comment
  }
  async getCommentByPlaylist(playlistId) {
    const playlist = await playlistsService.getPlaylistById(playlistId)
    // @ts-ignore
    if (!playlist) {
      throw new BadRequest('could not find comments for this playlist')
    }
    const comments = await dbContext.Comments.find({ playlistId }).populate('creator playlist')
    return comments
  }

}

export const commentsService = new CommentsService()