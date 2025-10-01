const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

const course = new Schema({
    courseName: {
        type: String
    },
    courseDetail: [
        {
            month: {
                type: String
            },
            course_instruction: {
                type: String
            }

        }
    ],
    coursePrice: {
        type: String
    },
    courseDuration: {
        type: String
    }
})

module.exports.COURSE = mongoose.model("course", course)