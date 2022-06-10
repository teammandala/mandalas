const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./app/config/db");
require("dotenv").config();

// middleware
app.use(bodyParser.json());

// db
dbConnect();

// router
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server: running on port ${port} 🔥🔥🔥`));
