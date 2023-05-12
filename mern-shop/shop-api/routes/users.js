const { Router } = require("express");
const controller = require("../controllers/user.controller");

const router = Router();

router.get("/", controller.getUsers);

module.exports = router;
