const { Router } = require("express");
const { homeController } = require("../controllers");

const router = Router();

router.get("/", homeController);

module.exports = router;
