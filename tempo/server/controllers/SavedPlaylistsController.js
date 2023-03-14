import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class SavedPlaylistsController extends BaseController {
  constructor() {
    super('api/savedplaylists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
  }
}