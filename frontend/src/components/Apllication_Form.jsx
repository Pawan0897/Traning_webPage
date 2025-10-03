
import React from 'react'

export default function Apllication_Form() {
    // const fromik = useFormik({
    //     initialValues: {
    //         name: "",
    //         phone: "",
    //         email: "",
    //         contacttime: "",


    //     }
    // })
    return (
        <>
            <div className="course_form bg-light py-4 px-3 rounded shadow">
                <div className="form ">
                    <h2 className="fw-bold text-center mb-3">Application Form</h2>
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label mt-1 fw-semibold "
                        >
                            Name <strong className="text-danger">*</strong>
                        </label>
                        <input
                            type="name"
                            className="form-control py-2 px-2"
                            id="exampleFormControlInput1"
                        />
                    </div>
                    {/* ************** */}
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label mt-1 fw-semibold "
                        >
                            Email <strong className="text-danger">*</strong>{" "}
                        </label>
                        <input
                            type="email"
                            className="form-control py-2 px-2"
                            id="exampleFormControlInput1"
                        />
                    </div>
                    {/* ****************** */}
                    {/* ************** */}
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label mt-1 fw-semibold "
                        >
                            Contact No. <strong className="text-danger">*</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control py-2 px-2"
                            id="exampleFormControlInput1"
                        />
                    </div>
                    {/* ************** */}
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label mt-1 fw-semibold "
                        >
                            Contact Time <strong className="text-danger">*</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control py-2 px-2"
                            id="exampleFormControlInput1"
                        />
                    </div>
                    {/* ************** */}
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label mt-1 fw-semibold "
                        >
                            Resume <strong className="text-danger">*</strong>
                        </label>
                        <input
                            type="file"
                            className="form-control py-2 px-2"
                            id="exampleFormControlInput1"
                        />
                    </div>
                    {/* *************** Apply */}
                    <button className="rounded py-2 px-3 bg-blue text-light fw-semibold border-0 d-flex m-auto">
                        Apply
                    </button>
                </div>
            </div>
        </>
    )
}
