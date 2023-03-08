import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const SavedPlaylistSchema = new Schema ({
  playlistId: {type: Schema.Types.ObjectId, ref: 'Playlist', required: true},
  creatorId: {type: Schema.Types.ObjectId, ref: 'Account', required: true}
}, defaultSchemaOptions)

SavedPlaylistSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

SavedPlaylistSchema.virtual('savedPlaylist', {
  localField: 'playlistId',
  foreignField: '_id',
  justOne: true,
  ref: 'Playlist'
})