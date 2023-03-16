import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { likesService } from "../services/LikesServices.js";
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
      .put('/:playlistId', this.editPlaylistById)
      .post('', this.createPlaylist)
      .delete('/:playlistId', this.deletePlaylistById)
      .put('/:playlistId/likes', this.likePlaylist)
  }

  async editPlaylistById(req, res, next) {
    try {
      const playlistId = req.params.playlistId;
      const playlistData = req.body;
      const userId = req.userInfo.id
      const updatedPlaylist = await playlistsService.editPlaylistById(playlistId, playlistData, userId);
      return res.send(updatedPlaylist);
    } catch (error) {
      next(error);
    }
  }

  async deletePlaylistById(req, res, next) {
    try {
      const playlistId = req.params.playlistId
      const userId = req.userInfo.id
      const deletedPlaylist = await playlistsService.deletePlaylistById(playlistId, userId)
      return res.send(deletedPlaylist)
    } catch (error) {
      next(error)
    }
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
      playlistData.creatorId = req.userInfo.id
      const playlist = await playlistsService.createPlaylist(playlistData)
      return res.send(playlist)
    } catch (error) {
      next(error)
    }
  }

  async likePlaylist(req, res, next) {
    
    try {
      const playlistId = req.params.playlistId
      const userId = req.userInfo.id
      const message = await likesService.LikeUnlike(playlistId, userId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
    
  }


}