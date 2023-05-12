const Product = require("../models/Product");

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (err) {
    return res
      .status(500)
      .json({ error: { message: "internal server error" } });
  }
};
