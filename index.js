const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const { homeRoute } = require("./src/routes");

//routes
app.use("/", homeRoute);

app.listen(port, () => console.log(`on port ${port}`));
