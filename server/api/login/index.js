"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./login.controller");

router.post("/login", controller.getLogin);

// router.post("/:id/login", controller.saveUser);

module.exports = router;
