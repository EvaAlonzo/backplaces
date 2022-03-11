const router = require("express").Router();
const favoriteRoutes = require("./favorite.routes");
const placesRoutes = require("./places.route");
const authRoutes = require("./auth")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/favorite", favoriteRoutes);
router.use("/places", placesRoutes);
router.use("/auth", authRoutes)

module.exports = router;
