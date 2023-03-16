import { dbContext } from "../db/DbContext"


class LikesService{

    async LikeUnlike(playlistId, userId) {
        const playlistsLikes = dbContext.Likes.find({creatorId: userId, playlistId: playlistId})
        if(!playlistsLikes){
            dbContext.Likes.create({creatorId: userId, playlistId: playlistId})
            return "liked"
        }
        
        dbContext.Likes.findOneAndDelete({playlistId: playlistId, creatorId: userId})
        return "unliked"
    }

}

export const likesService = new LikesService()