const router = require("express").Router();
const Place = require("../models/Places.model");
const {createPlaces,
    enlistPlaces, 
    detailPlaces,
    deletePlaces,
    editPlaces} = require("../controllers/place.controller")
const { verifyToken  } = require("../middelware/util-mid");
const { uploadsProcess } = require("../controllers/upload.controller");

//create place
router.post("/createplaces", verifyToken, createPlaces, uploadsProcess)

//get all places
router.get("/enlistplaces", enlistPlaces)

//editplaces
router.put("/editplaces/:id", verifyToken, editPlaces)

//get details of one place
router.get("/detailplaces/:id", verifyToken, detailPlaces)

//deleteplaces
router.delete("/deleteplaces/:id", verifyToken, deletePlaces)

module.exports = router;