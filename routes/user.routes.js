const router = require("express").Router();
const User = require("../models/User.model");
const { 
    detaillUser,
    editUser} = require("../controllers/user.controller")
const { verifyToken  } = require("../middelware/util-mid")

//get details of  user
router.get("/detailUser/:id", verifyToken, detaillUser);

//editplaces
router.put("/editUser/:id", verifyToken, editUser);

module.exports = router;