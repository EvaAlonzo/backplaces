const router = require("express").Router();
const Place = require("../models/Places.model");
const {createPlaces, enlistPlaces, detailPlaces} = require("../controllers/place.controller")

//create place
router.post("/createpLaces", createPlaces)

//get all places
router.get("/enlistplaces", enlistPlaces)

//get details of one place
router.get("/detailplaces", detailPlaces)

module.exports = router;