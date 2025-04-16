import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: Schema.type.objectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
commentSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
