const express = require("express");
const route = express.Router();
const cors = require("cors");
const users = require("../../models/User/Queries/users");
route.use(cors());
route.use(express.json());

//  Create a new User
route.post("/", async (req, res) => {
  users
    .createUser(req.body)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(500).json(err));
});

module.exports = route;
