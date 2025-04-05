export const createComment = async (req, res) => {
  try {
    res.json({ status: "success", data: "Comment created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const getComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: `Comment details for ID: ${req.params.id}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    res.json({ status: "success", data: `Comment ${req.params.id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const updateComment = async (req, res) => {
  try {
    res.json({ status: "success", data: `Comment ${req.params.id} updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
