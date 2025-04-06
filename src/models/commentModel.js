import { model, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Post is required"],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    content: {
      type: String,
      required: [true, "Comment content is required"],
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

export default Comment;
