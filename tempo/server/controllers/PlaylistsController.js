import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { playlistsService } from "../services/PlaylistsService.js";
import BaseController from "../utils/BaseController";

export class PlaylistsController extends BaseController {
  constructor() {
    super('api/playlists')
    this.router
      .get('', this.getAllPlaylists)
      .get('/:playlistId', this.getPlaylistById)
      .get('/:playlistId/comments', this.getCommentByPlaylist)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .put
      .post('', this.createPlaylist)
    // .delete
  }
  async getAllPlaylists(req, res, next) {
    try {
      const playlists = await playlistsService.getAllPlaylists()
      return res.send(playlists)
    } catch (error) {
      next(error)
    }
  }
  async getPlaylistById(req, res, next) {
    try {
      const playlistId = req.params.playlistId
      const playlist = await playlistsService.getPlaylistById(playlistId)
      return res.send(playlist)
    } catch (error) {
      next(error)
    }
  }
  async getCommentByPlaylist(req, res, next) {
    try {
      const playlistId = req.params.playlistId
      const comments = await commentsService.getCommentByPlaylist(playlistId)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createPlaylist(req, res, next) {
    try {
      const playlistData = req.body
      playlistData.creatorId = req.userInfo.creatorId
      const playlist = await playlistsService.createPlaylist(playlistData)
      return res.send(playlist)
    } catch (error) {
      next(error)
    }
  }




}