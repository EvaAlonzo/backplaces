const router = require("express").Router();
const Favorite = require("../models/Favorite.model");
const {findFavorites, 
    createFavorites, 
    deleteCollection} = require("../controllers/collection.controller");

//traer coleccion
router.get("/",findFavorites);

//unir a la coleccion
router.post("/add", createFavorites);

//delete
// router.delete("/delete", deleteCollection);

module.exports = router