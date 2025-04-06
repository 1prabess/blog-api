import { model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Post content is required"],
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      // required: [true, "Post category is required"],
    },

    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],

    dislikes: [{ type: Schema.Types.ObjectId, ref: "User" }],

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Post author is required"],
    },

    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
