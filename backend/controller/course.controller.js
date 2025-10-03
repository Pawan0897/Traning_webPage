const { COURSE } = require("../modal/course.modal");

const AddCourse = async (req, res) => {
    const { courseName, coursePrice, courseDuration, courseDetail } = req.body;
    /****************************  */
    try {
        const SaveCourse = new COURSE({
            courseName,
            coursePrice,
            courseDetail,
            courseDuration
        })
        const data = await SaveCourse.save();
        /****************************  */
        if (data) {
            return res.send({
                statuscode: 200,
                message: "Course Added Succesfully !!!",
                text: "This course is added Successfully !!!",
                data: data
            })
        }
        /****************************  */
        else {
            return res.send({
                statuscode: 400,
                message: "Something Was Wrong !!!",
            })
        }

    }
    /****************************  */
    catch (err) {
        return res.send({
            statuscode: 500,
            message: `${err}`,
        })
    }



}


/*************************** fetch the all course of traning */

const GetCourse = async (req, res) => {

    let CourseData = [];
    /***********************  for searching the taining course  ******* */
    try {
        if (req.query.name) {
            const searchData = { courseName: { $regex: new RegExp(req.query.name, "i") } }
            CourseData = await COURSE.find(searchData)
        }
        else {
            CourseData = await COURSE.find();
        }
        /****************************  */
        if (CourseData.length > 0) {
            return res.send({
                statuscode: 200,
                message: "Courses !!!",
                data: CourseData
            })
        }
        /****************************  */
        else {
            return res.send({
                message: "No Course Available!!!",
                statuscode: 400
            })
        }
        /****************************  */
    } catch (error) {
        return res.send({
            message: "Something is wrong", error,
            statuscode: 500
        })
    }
}

/***************************** get course detail ........ */
const GetCourseDetail = async (req, res) => {
    const id = req.params.id;
    const dataExist = await COURSE.findOne({ _id: id });
    try {
        if (dataExist) {
            return res.send({
                statuscode: 200,
                message: "Course detail",
                data: dataExist
            })
        }
        else {
            return res.send({
                message: "No DEtail",
                statucode: 400
            })
        }
    } catch (error) {
        return res.send({
            message: "Something is wrong", error,
            statuscode: 500
        })
    }


}



module.exports = { AddCourse, GetCourse, GetCourseDetail }