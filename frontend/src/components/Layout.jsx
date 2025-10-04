import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import CourseDetail from "./CourseDetail";
import Admin from "../pages/Admin";
import Loader from "../loader/Loader";
const Traning = lazy(() => import("./Traning"));
export default function Layout() {
    const [showlayout, setlayout] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setlayout(true);
        }, 2000);
        return () => clearTimeout(timer);
    });
    return (
        <Routes>
            {/* **************************  Loader....... */}
            <Route
                path="/"
                element={
                    <Suspense
                        fallback={
                            <div className="load">
                                <Loader />
                            </div>
                        }
                    >
                        {showlayout && <Traning />}
                        {!showlayout && (
                            <div className="load">
                                <Loader />
                            </div>
                        )}
                    </Suspense>
                }
            />
            {/* ***************************** */}
            <Route path="/course_detail/:id" element={<CourseDetail />} />
            {/* ***************************** */}
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}
