import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService {
  async getCommentsByPlaylistId(playlistId) {
    const res = await api.get(`api/playlists/${playlistId}/comments`)
    logger.log('comments by playlist ID ', res.data)
    AppState.comment = res.data.map(c => new Comment(c))
  }

  async createComment(formData, playlist) {
    logger.log('this is the playlist ID?', playlist) // I think this should be playlist.id??? example might be wrong tbd

    formData.playlistId = playlist
    const res = await api.post('api/comments', formData)
    logger.log('sending comment post from comment service line 18', res.data)
  }

  async destroyComment(commentId) {
    const res = await api.delete(`api/comments/${commentId}`)
    logger.log('removing comment comments service line 23', res.data)
    const commentIndex = AppState.comment.findIndex(c => c.creatorId == commentId)
    if (commentIndex !== -1) {
      AppState.comment.splice(commentIndex, 1)
    }
  }
}

export const commentsService = new CommentsService()