const express = require("express");
const route = express.Router();
const cors = require("cors");
const users = require("../../models/User/Queries/users");
route.use(cors());
route.use(express.json());


// CONTROLLER 2 ADD FUNCTIONS HERE

module.exports = route;
