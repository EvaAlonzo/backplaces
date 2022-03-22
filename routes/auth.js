const router = require("express").Router();
const { verifyToken } = require("../middelware/util-mid");
const { signupProcess,
loginProcess,
logoutProcess,
getUserLogged} = require("../controllers/auth.controller");

router.post("/signup", signupProcess);
router.post("/login", loginProcess);
router.delete("/logout", logoutProcess);
router.get("/getuser", verifyToken, getUserLogged);


module.exports = router