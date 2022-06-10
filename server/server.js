const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const dbConnect = require("./app/config/db");
require("dotenv").config();
const routes = require("./app/routes");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// file access publicly
app.use(
  "/media/avatar/",
  express.static(path.join(__dirname, "/media/avatar"))
);
// app.use("/", express.static(__dirname));

// db
dbConnect();

// router
app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server: running on port ${port} 🔥🔥🔥`));
