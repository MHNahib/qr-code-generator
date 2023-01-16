const express = require("express");
const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");
const { response } = require("./src/utils/response");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return response(
    res,
    StatusCodes.ACCEPTED,
    true,
    { say: "hello world" },
    "Accepted"
  );
});

app.listen(port, () => console.log(`on port ${port}`));
