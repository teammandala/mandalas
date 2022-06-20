const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./app/config/db");
require("dotenv").config();
const routes = require("./app/routes");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sites access with this api server
var corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:8082"],
};

app.use(cors(corsOptions));

// file access publicly
app.use("/media/avatar", express.static(path.join(__dirname, "/media/avatar")));
app.use(
  "/media/auction",
  express.static(path.join(__dirname, "/media/auction"))
);
app.use(
  "/media/carousel",
  express.static(path.join(__dirname, "/media/carousel"))
);
app.use("/media/kyc", express.static(path.join(__dirname, "/media/kyc")));

// db
dbConnect();

// router
app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server: running on port ${port} 🔥🔥🔥`));
