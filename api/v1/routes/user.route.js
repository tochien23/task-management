const express = require("express");
const router = express.Router();

const controller = require("../controller/user.controller");

const validate = require("../../../validates/auth.validate");

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", controller.register);

router.post("/login", validate.loginPost, controller.login);

router.post("/password/forgot", controller.forgotPassword);

router.post("/password/otp", controller.otpPassword);

router.post("/password/reset", controller.resetPassword);

router.get("/detail", authMiddleware.requireAuth, controller.detail);

router.get("/list", authMiddleware.requireAuth, controller.list);

module.exports = router;