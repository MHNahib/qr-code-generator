const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");
const { response } = require("../utils/response");

const homeController = async (req, res) => {
  return response(
    res,
    StatusCodes.ACCEPTED,
    true,
    { say: "hello world" },
    "Accepted"
  );
};

module.exports = { homeController };
