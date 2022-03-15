const router = require("express").Router();
const Favorite = require("../models/Favorite.model");
const {findFavorites, 
    createFavorites,
    editFavorites, 
    deleteFavorites} = require("../controllers/favorites.controller");

const { verifyToken} = require("../middelware/util-mid")

//traer favorites
router.get("/findfavorites", verifyToken, findFavorites);

//unir a la favorites
router.post("/createfavorites",verifyToken, createFavorites);

//edit favorites
router.post("/editfavorites", verifyToken, editFavorites)

//delete
router.post("/deletefavorites",verifyToken, deleteFavorites);

module.exports = router