import { useState } from "react";

export default function CourseDetail() {
    const [state, setstate] = useState([
        {
            pk: "pk"
        }
    ])
    console.log(state.map((item) => item));

    return (
        <>
            <section className="hero-banner d-flex justify-content-center bg-blue align-items-center">
                {/* /*************** Banner Section --xxxxxxxxxx */}
                <div className="banner-overlay"></div>
                <div className="banner-content ">
                    <h1 className="text-light fw-bold">
                        React Js Development [3 Months] { }
                    </h1>
                </div>
            </section>
            {/* **************************** Detail xxxxxxxxxxxxxxxxxxxx */}
            <section>
                <div className=" mt-4 container">
                    <div className="row">
                        <div className="col-md-8 ">
                            <div className="course_detail bg-light shadow rounded p-3 w-100 ">
                                {/* ************** Detail-headre */}
                                <div className="detail_header d-flex gap-4">
                                    <button className="border-0 bg-blue rounded-5 py-2 px-3 text-light fw-semibold" onClick={() => setstate([...state, { pk: "lop" }])}>
                                        {" "}
                                        location - Mohali
                                    </button>
                                    {/* xxxxxxxxxxxxxxx */}
                                    <button className="border-0 bg-blue rounded-5 py-2 px-3 text-light fw-semibold">
                                        duration - 3 months
                                    </button>
                                    {/* xxxxxxxxxxxxxxx */}
                                    <button className="border-0 bg-blue rounded-5 py-2 px-3 text-light fw-semibold">
                                        fee: ₹990.00
                                    </button>
                                    {/* xxxxxxxxxxxxxxx */}
                                </div>
                                {/* *end the box of detail header ******** */}
                                <div className="detail_box">
                                    <h6 className="fw-bold">Syllabus :</h6>
                                    <div className="title">
                                        <h2>Month 1</h2>
                                    </div>
                                    <div className="instruction">
                                        <p>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ******* Form xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
                        <div className="col-md-4">
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
                                            type="email"
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
                                            type="email"
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
                                            type="email"
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
                                            type="email"
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
