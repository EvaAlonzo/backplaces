const router = require("express").Router();
const Place = require("../models/Places.model");
const {createPlaces,
    enlistPlaces, 
    detailPlaces,
    deletePlaces } = require("../controllers/place.controller")
const { verifyToken  } = require("../middelware/util-mid")

//create place
router.post("/createplaces", createPlaces)

//get all places
router.get("/enlistplaces", enlistPlaces)

//get details of one place
router.get("/detailplaces/:id",  detailPlaces)

//deleteplaces
router.delete("/deleteplaces/:id", deletePlaces)

module.exports = router;