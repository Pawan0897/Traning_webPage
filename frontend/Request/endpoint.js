import { http } from "./https";

export const AddTraningCourse = async (body) => {
    return await http.post("/course/addcourse", body)
}
/*********************** Fetch the course ...... */
export const GetTraningCourse = async (body) => {
    return await http.get(`/course/getcourse?search=${body}`)
}

// ***************************** fetch detail

export const GetDetailOfCourse = async (id) => {
    return await http.get(`/course/coursedetail/${id}`)
}