const router = require("express").Router();
const favoriteRoutes = require("./favorite.routes");
const placesRoutes = require("./places.route");
const authRoutes = require("./auth");
const userRoutes = require("./user.routes");
const uploadCloud = require("../helpers/cloudinary")
const { uploadsProcess } = require("../controllers/upload.controller")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/upload", uploadCloud.array("images"),uploadsProcess);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/favorite", favoriteRoutes);
router.use("/places", placesRoutes);
router.use("/auth", authRoutes)
router.use("/profile", userRoutes)

module.exports = router;
