import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PlaylistSchema } from '../models/Playlist'
import { CommentSchema } from "../models/Comment";
import { TrackSchema } from '../models/Track';
class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Playlists = mongoose.model('Playlist', PlaylistSchema);
  Comments = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
