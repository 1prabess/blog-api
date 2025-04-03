export const createCategory = async (req, res) => {
  try {
    res.json({ status: "success", data: "Category created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const getCategory = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: `Category details for ID: ${req.params.id}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    res.json({ status: "success", data: `Category ${req.params.id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    res.json({ status: "success", data: `Category ${req.params.id} updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
