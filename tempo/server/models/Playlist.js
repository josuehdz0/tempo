import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const PlaylistSchema = new Schema ({
  name: basicStringType,
  tempo: {type: Number},
  genre: {...basicStringType, enum: ['rock', 'jazz', 'classical', 'edm']},
  totalTracks: {type: Number},
  runtime: {type: Number},
  creatorId: {type: Schema.Types.ObjectId, ref: 'Account', required: true}
}, defaultSchemaOptions)

PlaylistSchema.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true
})