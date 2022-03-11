const router = require("express").Router();
const { verifyToken } = require("../middelware/util-mid");
const { signupProcess,
loginProcess,
logoutProcess,
getUserLogged} = require("../controllers/auth.controller");

router.post("/signup", signupProcess);
router.post("/login", loginProcess);
router.post("/logout", logoutProcess);
router.get("/getUser", verifyToken, getUserLogged)


module.exports = router