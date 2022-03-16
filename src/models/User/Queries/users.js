const express = require("express");
const route = express.Router();
const cors = require("cors");
const User = require("../User");
route.use(cors());
route.use(express.json());

module.exports = {
    getUsersList: () => new Promise(() => {
        User.find().then((docs) => {
            resolve(docs)
        }).catch((err) => {
            reject(err)
        })
    }),
    createUser: (myData) => new Promise((resolve, reject) => {
        const newUser = new User(myData);
        newUser.save().then((doc) => {
            resolve(doc);
        }).catch((err) => {
            reject(err)
        })
    }),
}