import React from "react";
import { useNavigate } from "react-router";

export default function Traning() {
    const navigate = useNavigate()
    return (
        <>
            <section className="hero-banner d-flex justify-content-center bg-blue align-items-center">
                {/* /*************** Banner Section --xxxxxxxxxx */}
                <div className="banner-overlay"></div>
                <div className="banner-content ">
                    <h1 className="text-light">React JS </h1>
                </div>
            </section>
            {/* *************************** Search Section xxxxxxxxxx */}
            <div className="container">
                <div className="filter-block shadow mt-3">
                    <div className="row  p-4 bg-graylight">
                        <div className="col-md-12">
                            <div className="filter-item d-flex justify-content-center gap-3  align-items-center">
                                <div className="search-input w-100">
                                    <input type="text" className="w-100 p-2 rounded border-0 " />
                                </div>
                                <div className="search-button">
                                    <button className="bg-blue border-0 rounded px-5 text-light font-semibold    py-2">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6"></div> */}
                    </div>
                </div>
            </div>
            {/* *********************************** Section of Traning cards xxxxxxxxxx */}
            <section className="card-section mt-4">
                <div className="container">
                    <div className="row">
                        {/* ***** col-end  */}
                        <div className="col-md-4">
                            {/* ****** card  xxxxxxxxxx */}
                            <div className="card w-100 bg-light h-5 d-flex p-3 position-relative  justify-content-center align-items-center">
                                <div className="card-title text-center">
                                    <h4 className="fw-bold">React.js Development</h4>
                                </div>
                                {/* ****** description   xxxxxxxxxx */}
                                <div className="card-description text-center">
                                    <p className="font-semibold">
                                        Introduction to IoT Overview of IoT architecture,
                                        components, and applications...
                                    </p>
                                </div>
                                {/* ******* detail xxxxxxxx */}
                                <div className="card-detail">
                                    <div className="price-det w-100 d-flex ">
                                        <p className="fw-semibold float-start rounded bg-lightblue p-2 me-5">
                                            Price : ₹990.00
                                        </p>
                                        <p className="fw-semibold float-end rounded ms-3 bg-lightblue py-2 px-3">
                                            6 Weeks
                                        </p>
                                    </div>
                                    <button type="button" className="bg-blue m-auto d-flex border-0 rounded  py-2 px-2 text-light font-semibold" onClick={() => navigate("/course_detail")}>
                                        View Detail
                                    </button>
                                </div>
                            </div>
                            {/* ******* xxxxxxxxxx */}
                        </div>
                        {/* ***** col-send  xxxxxxxxxx */}
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
            {/* ************************************  */}
        </>
    );
}
