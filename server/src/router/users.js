const express = require("express");
const router = express.Router();
const { register, login, LoginWithGoogle } = require("../controllers/user");
router.post("/register", register);
router.post("/login", login);
router.post("/google-login", LoginWithGoogle);

module.exports = router;
