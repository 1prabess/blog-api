import { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Post description is required"],
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Post category is required"],
    },

    numViews: [{ type: Schema.Types.ObjectId, ref: "User" }],

    dislikes: [{ type: Schema.Types.ObjectId, ref: "User" }],

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Post author is required"],
    },

    photo: {
      type: String,
      required: [true, "Post image is required"],
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
