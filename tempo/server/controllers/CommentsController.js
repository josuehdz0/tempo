import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.postComment)
      .put('/:commentId', this.editComment)
      .delete('/:commentId', this.deleteComment)
  }

  async postComment(req, res, next) {
    try {
      const postData = req.body
      postData.creatorId = req.userInfo.id
      const comment = await commentsService.postComment(postData)
      return res.send(comment)

    } catch (error) {
      next(error)
    }

  }

  async editComment(req, res, next) {
      try {
        const commentId = req.params.commentId
        const userId = req.userInfo.id
        const commentData = req.body
        const comment = await commentsService.editComment(commentId, userId, commentData)
        return res.send(comment)
      } catch (error) {
        next(error)
      }
  }

  async deleteComment(req, res, next) {
    try {
      const commentId = req.params.commentId
      const userId = req.userInfo.id
      const comment = await commentsService.deleteComment(commentId, userId)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

}