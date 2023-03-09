import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.postComment)
  }
  async postComment(req, res, next) {
    try {
      const postData = req.body
      postData.creatorId = req.userInfor.creatorId
      const comment = await commentsService.postComment(postData)
      return res.send(comment)

    } catch (error) {
      next(error)
    }


  }
}