const { Router } = require("express");
const controller = require("../controllers/order.controller");

const router = Router();

router.post("/", controller.createOrder);
router.get("/:id", controller.getOrders);

module.exports = router;
