import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const CommentSchema = new Schema({
  body: basicStringType,
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  playlistId: { type: Schema.Types.ObjectId, required: true, ref: 'Playlist' },

}, defaultSchemaOptions)

CommentSchema.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true
})

CommentSchema.virtual('playlist', {
  localField: 'playlistId',
  foreignField: '_id',
  ref: 'Playlist'
})