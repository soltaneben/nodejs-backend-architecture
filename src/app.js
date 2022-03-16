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
app.use("/mobile", require("./routes/mobile"));
app.use("/client", require("./routes/client"));

module.exports = app;
