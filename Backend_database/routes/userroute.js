const express = require('express');
const { userlogged,loggeduser } = require('../controllers/resumecontroller');
const userrouter = express.Router();

userrouter.post("/",userlogged);
userrouter.post("/login",loggeduser);
module.exports = userrouter;