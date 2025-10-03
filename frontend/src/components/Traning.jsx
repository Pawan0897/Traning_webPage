import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GetTraningCourse } from "../../Request/endpoint";
import { convert } from "html-to-text";
import Loader from "../loader/Loader";
export default function Traning() {
    const [inputValue, setInputVlaue] = useState("");
    const [search, setSearch] = useState(inputValue);

    const data = useQuery({
        queryKey: ["getcourse", search],
        queryFn: () => GetTraningCourse(search),
    });
    const courseData = data?.data?.data?.data;


    return (
        <>
            <section className="hero-banner d-flex ps-5 bg-blue align-items-center">
                {/* /*************** Banner Section --xxxxxxxxxx */}
                <div className="banner-overlay"></div>
                <div className="banner-content ">
                    <h2 className="text-light fw-semibold ms-5">Traning Opportunites </h2>
                    <h6 className="text-light fw-semibold ms-5 mt-4 d-flex"><p className="text-grey fw-semibold me-1">Home </p> / Traning</h6>
                </div>
            </section>

            {/* *************************** Search Section xxxxxxxxxx */}

            <div className="container">
                <div className="filter-block  mt-3">
                    <div className="row  px-4 ">
                        <div className="col-md-12">
                            <div className="filter-item row   px-3  align-items-center">
                                {/* **************** col-md-9 */}
                                <div className=" col-md-9   ">
                                    <div className="search-input">
                                        <input
                                            type="text"
                                            className="py-2 col-md-3 px-4 rounded border-0 "
                                            placeholder="Search..."
                                            onChange={(e) => setInputVlaue(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* *********************************** */}
                                {/* **************** col-md-9 */}
                                <div className="col-md-3">
                                    <div className="search-button">
                                        <button
                                            className="bg-blue border-0 rounded  text-light font-semibold   "
                                            onClick={() => setSearch(inputValue)}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className="col-md-6"></div> */}
                    </div>
                </div>
            </div>

            {/* ************************ Title section */}

            {/* *********************************** Section of Traning cards xxxxxxxxxx */}
            <section className="card-section mt-4">

                <div className="container">
                    <div className="row">
                        {/* ***** col-end  */}
                        {
                            /******************* course detail the fetch */
                            courseData?.map((items) => {
                                console.log(items?.courseDetail[0], "...pppp..p.");

                                /*************************************sxxxxxxxxxxxxxxxxxxx coursedetail is array soo use scond time xxxxxxxx */

                                const firstDetailArray = [items?.courseDetail?.[0]];
                                return firstDetailArray?.map((item) => {
                                    /********************* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    covert html to text in plain  */
                                    const text = convert(item?.course_instruction || "", {
                                        wordwrap: false,
                                        selectors: [
                                            {
                                                selector: 'li',
                                                format: 'inline'
                                            },
                                            {
                                                selector: 'ul',
                                                format: 'inline'
                                            },
                                            {
                                                selector: 'ol',
                                                format: 'inline'
                                            }
                                        ]
                                    });
                                    /************* is used to view decrease the size of Insrtuctions */
                                    const desciption = text?.split(" ");
                                    const words = desciption?.slice(0, 10).join(" ");
                                    return (
                                        <>
                                            <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 mb-5">
                                                {/* ****** card  xxxxxxxxxx */}
                                                <div className="card w-100 bg-light h-5 d-flex p-3 position-relative  justify-content-center align-items-center">
                                                    <div className="card-title text-center">
                                                        <h4 className="fw-bold text-bg">{items?.courseName}</h4>
                                                    </div>
                                                    {/* ****** description   xxxxxxxxxx */}
                                                    <div className="card-description text-center">
                                                        <p className=" text-center">
                                                            Traning Sylabus: {words}...
                                                        </p>
                                                    </div>
                                                    {/* ******* detail xxxxxxxx */}
                                                    <div className="card-detail">
                                                        <div className="price-det w-100 d-flex justify-content-between gap-5">
                                                            <p className="fw-semibold  float-start rounded bg-lightblue p-2 ">
                                                                Price : ₹{items?.coursePrice}.00
                                                            </p>
                                                            <p className="fw-semibold float-end rounded  bg-lightblue py-2 px-3">
                                                                {items?.courseDuration}
                                                            </p>
                                                        </div>
                                                        <div className="view_detail text-center mt-2 mb-2">
                                                            <Link to={`/course_detail/${items?._id}`} className="btn-edit  py-2 px-2  fw-semibold m-auto">
                                                                <span>View More</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******* xxxxxxxxxx */}
                                            </div>
                                        </>
                                    );
                                });
                            })
                        }
                        {/* ***** col-send  xxxxxxxxxx */}
                    </div>
                </div>
            </section>
            {/* ************************************  */}
        </>
    );
}
