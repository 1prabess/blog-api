import { StatusCodes } from "http-status-codes";
import Post from "../../models/postModel.js";

const uploadThumbnailPhotoProvider = async (req, res) => {
  const postId = req.params.postId;

  if (!req.file) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      reason: "No file uploaded.",
    });
  }

  const thumbnail = req.file.path;

  try {
    const post = await Post.findByIdAndUpdate(postId, {
      $set: {
        thumbnail,
      },
    });

    if (!post) {
      return res.status(StatusCodes.NOT_FOUND).json({
        reason: "Post not found.",
      });
    }

    return res.status(StatusCodes.CREATED).json({
      message: "Thumbnail uploaded successfully",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      reason: "Unable to process the request, please try again later.",
    });
  }
};

export default uploadThumbnailPhotoProvider;
