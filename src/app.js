const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Express app initialization
const app = express();
// Routes
app.use(bodyParser.json());
app.use(cors());
// IMAGES FOLDER&
app.use("/assets", express.static("assets"));
// App Route handlers
app.use("/admin", require("./routes/admin"));

module.exports = app;
