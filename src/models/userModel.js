import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Firstname is required"],
    },

    lastName: {
      type: String,
      required: [true, "Lastname is required"],
    },

    profilePhoto: {
      type: String,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    // isBlocked: {
    //   type: Boolean,
    //   default: false,
    // },

    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },

    // role: {
    //   type: String,
    //   enum: ["Admin", "Guest", "Editor"],
    // },

    // viewer: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],

    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

// Get fullname
userSchema.virtual("fullname").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Get initials
userSchema.virtual("initials").get(function () {
  return `${this.firstName[0]}${this.lastName[0]}`;
});

// Get posts count
userSchema.virtual("postCount").get(function () {
  return this.posts.length;
});

// Get following count
userSchema.virtual("followingCount").get(function () {
  return this.following.length;
});

// Get followers count
userSchema.virtual("followersCount").get(function () {
  return this.followers.length;
});

const User = model("User", userSchema);

export default User;
