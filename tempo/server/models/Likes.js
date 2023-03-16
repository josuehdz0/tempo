import { Schema } from "mongoose";
import { defaultSchemaOptions } from "../db/Constants";

export const LikeSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    playlistId: { type: Schema.Types.ObjectId, required: true, ref: 'Playlist' },

}, defaultSchemaOptions)
