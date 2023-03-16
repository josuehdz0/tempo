import { dbContext } from "../db/DbContext"


class LikesService{

    async LikeUnlike(playlistId, userId) {
        const playlistsLikes = dbContext.Likes.find({creatorId: userId, playlistId: playlistId})
        if(!playlistsLikes){
            const like = dbContext.Likes.create({creatorId: userId, playlistId: playlistId})
            return "liked" + like
        }
        
        const unlike = dbContext.Likes.findOneAndDelete({playlistId: playlistId, creatorId: userId})
        return "unliked" + unlike
    }

}

export const likesService = new LikesService()