import React from 'react'
import { Route, Routes } from 'react-router'
import Traning from './Traning'
import CourseDetail from './CourseDetail'
import Admin from '../pages/Admin'

export default function Layout() {
    return (
        <Routes>
            <Route path='/' element={<Traning />} />
            <Route path='/course_detail' element={<CourseDetail />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    )
}
