const express = require("express");
const app = express();
require("colors");
const DbConnect = require("./config/Db");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.port || 4000;

DbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is up and running and Db Connected".bgBlue);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
