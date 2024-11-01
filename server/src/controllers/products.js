const getProducts = async (req, res) => {
  try {
    res.status(200).json({ message: "Products" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = getProducts;
