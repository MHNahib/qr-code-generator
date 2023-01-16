const { generateQrcode } = require("../controllers");
const { Router } = require("express");

const router = Router();

router.get("/", generateQrcode);

module.exports = router;
