import { useQuery } from "@tanstack/react-query";

import { useNavigate, useParams } from "react-router-dom";
import { GetDetailOfCourse } from "../../Request/endpoint";
import { Bold, Clock3, IndianRupee, MapPin } from "lucide-react";
import Apllication_Form from "./Apllication_Form";

export default function CourseDetail() {
    const navigate = useNavigate()
    // console.log(state.map((item) => item));
    const { id } = useParams();
    // console.log(id, "pppppppppppppppppppppppppppppppppppppppooooooooooooooooooooooooooooooooooo");

    /********************************Api Queries start .... */
    const { data } = useQuery({
        queryKey: ["getcourseDetail"],
        queryFn: async () => {
            const res = await GetDetailOfCourse(id)
            return res.data
        }
    })


    return (
        <>
            <section className="hero-banner d-flex  bg-blue align-items-center">
                {/* /*************** Banner Section --xxxxxxxxxx */}
                <div className="banner-overlay"></div>
                <div className="banner-content  detail_banner">
                    <h2 className="text-light fw-semibold ms-5">{data?.data?.courseName} [{data?.data?.courseDuration}] </h2>
                    <h6 className="text-light fw-semibold ms-5 mt-4 d-flex"><p className="text-grey fw-semibold me-1 " onClick={() => navigate("/")}>Home </p> / Traning</h6>
                </div>
            </section>
            {/* **************************** Detail xxxxxxxxxxxxxxxxxxxx */}
            <section className="mb-5">
                <div className=" mt-4 container ">
                    <div className="row">
                        <div className="col-md-7 col-lg-8 col-sm-12 col-xs-12">
                            <div className="course_detail bg-light shadow rounded py-3 px-4 w-100 ">
                                {/* ************** Detail-headre */}
                                <ul className="detail_header d-flex gap-2 flex-wrap ">
                                    <li className=" bg-blue rounded-5  d-flex fw-semibold   align-items-center text-light ">
                                        {" "}
                                        <a className="mb-0 ms-1 text-light">
                                            <i>

                                                <MapPin size={16} className="text-light fw-semibold" />
                                            </i>
                                            Location - Mohali
                                        </a>
                                    </li>
                                    {/* xxxxxxxxxxxxxxx */}
                                    <li className="bg-blue rounded-5  d-flex   align-items-center text-light ">


                                        <a className="mb-0 ms-1 text-light">
                                            <i>
                                                <Clock3 size={16} className="text-light fw-semibold" />
                                            </i>  Duration - {data?.data?.courseDuration}
                                        </a>

                                    </li>
                                    {/* xxxxxxxxxxxxxxx */}
                                    <li className="bg-blue rounded-5  d-flex   align-items-center text-light ">

                                        <a className="mb-0 ms-1 text-light">
                                            <i>
                                                <IndianRupee size={15} className="text-light fw-bold" fontWeight="bold" />
                                            </i>fee: {data?.data?.coursePrice}.00
                                        </a>

                                    </li>
                                    {/* xxxxxxxxxxxxxxx */}
                                </ul>
                                {/* *end the box of detail header ******** */}
                                <div className="detail_box">
                                    <h6 className="fw-bold mt-4 mb-3"> Traning Syllabus :</h6>
                                    {
                                        data?.data?.courseDetail?.map((item) => {
                                            return (
                                                <>
                                                    <div className="title">
                                                        <h3 className="text-bg fw-semibold">{item?.month}</h3>
                                                    </div>
                                                    <div className="instruction">
                                                        <div dangerouslySetInnerHTML={{ __html: item?.course_instruction }}></div>
                                                        {/* <p>
                                                            {item?.course_instruction}

                                                        </p> */}
                                                    </div>
                                                </>
                                            )

                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        {/* ******* Form xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
                        <div className="col-md-5 col-lg-4 col-sm-12 col-xs-12">
                            <Apllication_Form />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
