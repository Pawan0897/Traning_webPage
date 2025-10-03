const express = require("express");
const { AddCourse, GetCourse, GetCourseDetail } = require("../controller/course.controller");

const router = express.Router();

router.post("/addcourse", AddCourse);
/****************************************** */
router.get("/getcourse", GetCourse)
/**************************** get course detail */
router.get("/coursedetail/:id", GetCourseDetail)
module.exports = router;