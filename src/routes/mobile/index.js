// MOBILE APP ROUTER
const express = require("express");
const route = express.Router();

route.use("/users", require("./userController"));
route.use("/route2", require("./route2Controller"));

module.exports = route;