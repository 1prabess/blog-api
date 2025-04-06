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
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Post author is required"],
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Post category is required"],
      enum: ["technology", "lifestyle", "health", "business"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual("likesCount").get(function () {
  return this.likes.length;
});

const Post = model("Post", postSchema);

export default Post;
