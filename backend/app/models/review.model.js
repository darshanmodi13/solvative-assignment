import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    Date: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const ReviewModel = model("Reviews", reviewSchema);
