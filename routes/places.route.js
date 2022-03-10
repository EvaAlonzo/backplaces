const router = require("express").Router();
const Place = require("../models/Places.model");
const {createPlaces, enlistPlaces, detailPlaces} = require("../controllers/place.controller")

//create place
router.post("/create", createPlaces)

//get all places
router.get("/", enlistPlaces)

//get details of one place
router.get("/detail/:id", detailPlaces)

module.exports = router;