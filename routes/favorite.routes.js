const router = require("express").Router();
const Favorite = require("../models/Favorite.model");
const {findFavorites, 
    createFavorites,
    editFavorites, 
    deleteFavorites} = require("../controllers/favorites.controller");

//traer favorites
router.get("/findfavorites",findFavorites);

//unir a la favorites
router.post("/createfavorites",createFavorites);

//edit favorites
router.post("/editfavorites",editFavorites)

//delete
router.post("/deletefavorites",deleteFavorites);

module.exports = router