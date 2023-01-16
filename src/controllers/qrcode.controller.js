const QRCode = require("qrcode");
const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");
const { response } = require("../utils/response");

const generateQrcode = async (req, res) => {
  const { url } = req.query;

  try {
    const options = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.95,
      margin: 1,
      color: {
        dark: "#208698",
        light: "#FFF",
      },
    };

    const qrcode = await QRCode.toFileStream(res, url, options);
    // console.log(qrcode);
    // response(res, StatusCodes.ACCEPTED, true, qrcode, "Success");
  } catch (err) {
    response(res, StatusCodes.BAD_REQUEST, true, null, err.message);
  }
};

module.exports = { generateQrcode };
