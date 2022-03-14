// ADMIN APP CONTROLLER
const express = require("express");
const route = express.Router();
const cors = require("cors");
const user = require('../../models/User/Queries/users');
route.use(cors())
route.use(express.json())

//Get all Admins
route.get('/userslist', async (req, res) => {
    let response = user.getUsersList();
    res.json(response)
});
module.exports = route ;