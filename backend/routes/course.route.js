const express = require("express");
const { AddCourse } = require("../controller/course.controller");

const router = express.Router();

router.post("/addcourse", AddCourse);

module.exports = router;