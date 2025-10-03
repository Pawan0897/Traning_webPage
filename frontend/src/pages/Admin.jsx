import React, { useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import {
    Undo,
    Redo,
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    Link as LinkIcon,
    List,
    ListOrdered,
    Quote,
    Code,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Heading1,
    Heading2,
} from "lucide-react";
import { useFormik } from "formik"
import Modal from "react-bootstrap/Modal";
import * as yup from "yup"
import { useMutation } from "@tanstack/react-query";
import { AddTraningCourse } from "../../Request/endpoint";
import Swal from "sweetalert2"

/*************************************************************************************************** Export */
export default function Admin() {
    const [viewCourse, SetViewCourse] = useState(false);

    /******************************************************* Add th instruction on state */
    const [detail, setDetail] = useState([]);
    /******************************* */
    const [month, setMonth] = useState("");
    /************************ Show submit button */
    // const [showSubmitBtn, SetShowSubmit] = useState(false);

    /********************** Modal oprator */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    /************************ formik yup */
    const formik = useFormik({
        initialValues: {
            courseName: "",
            coursePrice: "",
            courseDuration: ""
        },
        validationSchema: yup.object({
            courseName: yup.string().required(),
            coursePrice: yup.string().required(),
            courseDuration: yup.string().required()

        }),
        onSubmit: () => { setShow(true), SetViewCourse(false) }

    })

    /**************************** */

    const editor = useEditor({
        extensions: [StarterKit],
        content: " ",
    });

    /********************* Run the Api query to store the data in db */
    const SubmitCourse = useMutation({
        mutationKey: ["adddata"],
        mutationFn: (body) => AddTraningCourse(body),
        onSuccess: (res) => {
            console.log(res?.data?.statuscode, "pkpkpkpkpkpkpkpkpkkpk");

            if (res?.data?.statuscode == 200) {
                formik?.resetForm()
                setDetail([])
                SetViewCourse(false)
                /******************** alert....... */
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                /******************** alert 2...... */
                Toast.fire({
                    icon: "success",
                    title: res?.data?.message
                });

            }
            else {
                Swal.fire({
                    title: res?.data?.message,
                    text: "Something was wrong",
                    icon: "info"

                })
            }

        }
    })


    /**************************** */
    if (!editor) return null;
    /**************************** */
    const setLink = () => {
        const url = prompt("Enter URL");
        if (url) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    };
    /**************************** */
    // console.log(editor, "............");
    /**************************** */
    const EditChain = (key) => {
        switch (key) {
            case "bold":
                editor.chain().focus().toggleBold().run();
                break;
            case "italic":
                editor.chain().focus().toggleItalic().run();
                break;
            case "undo":
                editor.chain().focus().undo().run();
                break;
            case "redo":
                editor.chain().focus().redo().run();
                break;
            case "Heading1":
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                break;
            case "Heading2":
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                break;
            case "UnderlineIcon":
                editor.chain().focus().toggleUnderline().run();
                break;
            case "Strikethrough":
                editor.chain().focus().toggleStrike().run();
                break;
            case "bulletList":
                editor.chain().focus().toggleBulletList().run();
                break;
            case "orderedList":
                editor.chain().focus().toggleOrderedList().run();
                break;
            case "blockQuote":
                editor.chain().focus().toggleBlockquote().run();
                break;
            case "codeBlock":
                editor.chain().focus().toggleCodeBlock().run();
                break;

            default:
                break;
        }
    };
    /************************************* Modal course detail functions */
    const AddCourseDetail = () => {
        if (month == "" || editor.getHTML() == "") {
            alert("Please fill the all field")
        }
        else {
            setDetail([
                ...detail,
                {
                    month: month,
                    course_instruction: editor.getHTML(),
                },
            ]);
            // console.log(detail, "i m pawan");
            /**************** close the modal of add detail */
            setShow(false);
            /**************** after adding the month is khali */
            setMonth("")
            /**************** clear the introducton input after cliked */
            editor.commands.clearContent()
            /**************** show submit buttom */

            /************* view the addedd conednt */
            SetViewCourse(true)
        }

    };


    return (
        <>

            <div className="container">


                <h1 className="text-center fw-bold mt-3"> Add Course</h1>

                {/* .......................................................................................................... */}
                <div className="row  justify-content-center align-items-center mt-5">
                    <div className="col-md-10">

                        {/* ********************************************************** */}
                        <div className="admin-box bg-light p-4 shadow rounded">
                            <div className="admin-form">
                                <div className="row">
                                    {/* ************************ */}
                                    <div className="col-md-6">
                                        <div class="">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mt-1 fw-semibold "
                                            >
                                                Course Name <strong className="text-danger">*</strong>
                                            </label>
                                            <input
                                                type="text"
                                                onChange={formik?.handleChange}
                                                value={formik?.values?.courseName}
                                                name={"courseName"}
                                                className="form-control py-2 px-2"
                                                id="exampleFormControlInput1"
                                            />
                                        </div>
                                        {formik?.errors?.courseName && (<p className="text-danger text-capitalize">{formik?.errors?.courseName} <strong className="fx-bold text-danger">*</strong></p>)}
                                    </div>
                                    {/* ************************ */}
                                    <div className="col-md-3">
                                        <div class="">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mt-1 fw-semibold "
                                            >
                                                Course Price <strong className="text-danger">*</strong>
                                            </label>
                                            <input
                                                type="text"
                                                onChange={formik?.handleChange}
                                                value={formik?.values?.coursePrice}
                                                name={"coursePrice"}
                                                className="form-control py-2 px-2"
                                                id="exampleFormControlInput1"
                                            />
                                        </div>
                                        {formik?.errors?.coursePrice && (<p className="text-danger text-capitalize">{formik?.errors?.coursePrice} <strong className="fx-bold text-danger">*</strong></p>)}
                                    </div>
                                    {/* ************************ */}
                                    {/* ************************ */}
                                    <div className="col-md-3">
                                        <div class="">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mt-1 fw-semibold "
                                            >
                                                Course Duration{" "}
                                                <strong className="text-danger">*</strong>
                                            </label>
                                            <input
                                                name={"courseDuration"}
                                                value={formik?.values?.courseDuration}
                                                onChange={formik?.handleChange}
                                                type="text"
                                                className="form-control py-2 mb-0 px-2"
                                                id="exampleFormControlInput1"
                                            />
                                        </div>
                                        {formik?.errors?.courseDuration && (<p className="text-danger text-capitalize">{formik?.errors?.courseDuration} <strong className="fx-bold text-danger">*</strong></p>)}
                                    </div>
                                    {/* ************************ ........................*/}

                                    {/* *************************** button */}
                                    <div className="submit-btn ">

                                        <button
                                            variant="primary"
                                            type="button"
                                            className="py-2 d-flex m-auto mt-4 px-3 bg-danger border-0 btn text-light fw-semibold"
                                            onClick={() => formik?.handleSubmit()}
                                        >
                                            Add Course Detail +
                                        </button>

                                    </div>

                                    {/* ........................................... */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ********** col-10 is end  */}
                </div>
            </div>
            {/* ****************************************** Modal section is statred  *************************************************/}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Course Detail <strong className="text-danger"> *</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            {/* ************************ ........................*/}
                            <div className="col-md-12">
                                <div class="mb-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        className="form-label mt-1 fw-semibold "
                                    >
                                        Month Title <strong className="text-danger">*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control py-2 px-2"
                                        id="exampleFormControlInput1"
                                        onChange={(e) => setMonth(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* ***************************************8 */}
                            <div className="col-md-12">
                                <div className="content-box border rounded">
                                    <div className="flex flex-wrap gap-2 border-b   bg-gray-50  rich-text-input rounded content-item">
                                        <button onClick={() => EditChain("undo")}>
                                            <Undo size={18} />
                                        </button>
                                        <button onClick={() => EditChain("redo")}>
                                            <Redo size={18} />
                                        </button>

                                        <button onClick={() => EditChain("Heading1")}>
                                            <Heading1 size={18} />
                                        </button>
                                        <button className=" " onClick={() => EditChain("Heading2")}>
                                            <Heading2 size={18} />
                                        </button>

                                        <button className="" onClick={() => EditChain("bold")}>
                                            <Bold size={18} />
                                        </button>
                                        <button onClick={() => EditChain("italic")}>
                                            <Italic size={18} />
                                        </button>
                                        <button onClick={() => EditChain("UnderlineIcon")}>
                                            <UnderlineIcon size={18} />
                                        </button>
                                        <button onClick={() => EditChain("Strikethrough")}>
                                            <Strikethrough size={18} />
                                        </button>

                                        <button onClick={() => EditChain("bulletList")}>
                                            <List size={18} />
                                        </button>
                                        <button onClick={() => EditChain("orderedList")}>
                                            <ListOrdered size={18} />
                                        </button>
                                        <button onClick={() => EditChain("blockQuote")}>
                                            <Quote size={18} />
                                        </button>
                                        <button onClick={() => EditChain("codeBlock")}>
                                            <Code size={18} />
                                        </button>

                                        <button onClick={setLink}>
                                            <LinkIcon size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                editor.chain().focus().setTextAlign("left").run()
                                            }
                                        >
                                            <AlignLeft size={18} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                editor.chain().focus().setTextAlign("center").run()
                                            }
                                        >
                                            <AlignCenter size={18} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                editor.chain().focus().setTextAlign("right").run()
                                            }
                                        >
                                            <AlignRight size={18} />
                                        </button>
                                    </div>
                                    {/* ******************************* Input */}
                                    <div className="editor_wrap">
                                        <EditorContent
                                            editor={editor}
                                            className="bg-light py-3 px-3 rounded editor_input"

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-danger btn text-light fw-semibold border-0 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-success btn text-light fw-semibold border-0 rounded"
                        onClick={() => AddCourseDetail()}
                    >
                        Add Detail
                    </button>
                </Modal.Footer>
            </Modal>
            {/* ***************************** end */}



            {/* ********************************************************** Modal to the The course for view */}
            <Modal
                show={viewCourse}
                onHide={() => SetViewCourse(false)}
                backdrop="static"
                size="lg"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        View Course <strong className="text-danger"> *</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            {/* ************************ ........................*/}
                            <div className="col-md-12">
                                <div className="table table-bordered    ">
                                    <table className="table border text-center table-bordered">
                                        <thead>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Duration</th>

                                        </thead>
                                        <tbody>
                                            <td>{formik?.values?.courseName}</td>
                                            <td>{formik?.values?.coursePrice}</td>
                                            <td>{formik?.values?.courseDuration}</td>
                                        </tbody>

                                    </table>
                                </div>
                                <div className="detail-course">
                                    {
                                        detail?.map((item) => {
                                            return (
                                                <>

                                                    <p><strong>Month:</strong>{item?.month}</p>
                                                    <p><strong>Course Instruction:</strong>{item?.course_instruction}</p>

                                                </>
                                            )
                                        })
                                    }
                                </div>
                                {/* /******* Add more detail if you want */}
                                <div className="addmore_detail">
                                    <button className="bg-danger text-light fw-semibold border-0 btn " onClick={() => formik?.handleSubmit()}>Add More Details + </button>
                                </div>
                            </div>
                            {/* ***************************************8 */}

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-danger btn text-light fw-semibold border-0 rounded"
                        onClick={() => SetViewCourse(false)}
                    >
                        Close
                    </button>
                    <button
                        className="bg-success btn text-light fw-semibold border-0 rounded"
                        onClick={() => {
                            const body = {
                                courseName: formik?.values?.courseName,
                                coursePrice: formik?.values?.coursePrice,
                                courseDuration: formik?.values?.courseDuration,
                                courseDetail: detail
                            }
                            SubmitCourse.mutate(body)
                            SetViewCourse(false)
                        }}
                    >
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
