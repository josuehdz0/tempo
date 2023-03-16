import { dbContext } from "../db/DbContext"


class LikesService{

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