import { dbContext } from "../db/DbContext.js"
import { BadRequest, UnAuthorized } from "../utils/Errors.js"
import { playlistsService } from "./PlaylistsService.js"

class CommentsService {
  async postComment(postData) {
    const playlist = await playlistsService.getPlaylistById(postData.playlistId)
    // @ts-ignore
    if (!playlist) {
      throw new BadRequest('bad request from comment service')
    }
    const comment = await dbContext.Comments.create(postData)
    await (await comment.populate('playlist')).populate('creator', 'id spotify.display_name spotify.external_urls.spotify spotify.followers spotify.images')
    return comment
  }
  async getCommentByPlaylist(playlistId) {
    const playlist = await playlistsService.getPlaylistById(playlistId)
    // @ts-ignore
    if (!playlist) {
      throw new BadRequest('could not find comments for this playlist')
    }
    const comments = await dbContext.Comments.find({ playlistId }).populate('playlist').populate('creator', 'id spotify.display_name spotify.external_urls.spotify spotify.followers spotify.images')
    return comments
  }

  async editComment(commentId, userId, commentData) {
    const comment = await dbContext.Comments.findById(commentId)
    if(!comment){
      throw new BadRequest('Invalid comment id D:')
    }
    if(comment.creatorId != userId){
      throw new UnAuthorized("You are unauthroized to edit comment")
    }
    comment.body = comment.body
    await comment.save()
    return comment
  }

  async deleteComment(commentId, userId) {
    const comment = await dbContext.Comments.findById(commentId)
    if(!comment){
      throw new BadRequest("invalid comment id")
    }
    if(comment.creatorId != userId){
      throw new UnAuthorized('You are not authorized to delete this comment')
    }
    comment.delete()
    return ("comment deleted")
  }

}

export const commentsService = new CommentsService()