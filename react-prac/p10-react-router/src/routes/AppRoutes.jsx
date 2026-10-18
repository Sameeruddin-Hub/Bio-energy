import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import AboutCompany from '../pages/About'
import Detail from '../pages/Detail'


const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="detail" element={<Detail />} />
                </Route>

                <Route path="/about" element={<AboutCompany />} >
                    <Route path='detail' element={<Detail />} />
                </Route>

                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div >

    )
}

export default AppRoutes