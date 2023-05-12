const Order = require("../models/Order");

module.exports.createOrder = async (req, res) => {
  try {
    const orderInstance = new Order(req.body);
    const newOrder = await orderInstance.save();

    return res.status(200).json(newOrder);
  } catch (err) {
    return res
      .status(500)
      .json({ error: { message: "internal server error" } });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id });

    return res.status(200).json(orders);
  } catch (err) {
    return res
      .status(500)
      .json({ error: { message: "internal server error" } });
  }
};
