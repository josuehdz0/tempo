import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class LikesService{
    async getAllPlaylistsLikes(playlistId) {
        const likes = await dbContext.Likes.find(playlistId)
        if(!likes){
            return []
        }
        return likes
    }

    async LikeUnlike(playlistId, userId) {
        const playlistsLike = await dbContext.Likes.findOne({creatorId: userId, playlistId: playlistId})

        if(!playlistsLike){
            dbContext.Likes.create({creatorId: userId, playlistId: playlistId})
            return "liked"
        }else{
            playlistsLike.remove()
            return `Unliked`
        }      
    }
}

export const likesService = new LikesService()