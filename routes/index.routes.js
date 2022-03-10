const router = require("express").Router();
const favoritenRoutes = require("./favorite.routes");
const placesRoutes = require("./places.route");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/favorite", favoritenRoutes);
router.use("/places", placesRoutes);

module.exports = router;
