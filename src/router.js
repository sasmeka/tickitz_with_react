import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './page/home/index'
import Sign_in from "./page/sign_in";
import Sign_up from "./page/sign_up";
import Verification from "./page/verification";

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<Sign_in />} />
                <Route path="/sign-up" element={<Sign_up />} />
                <Route path="/" element={<Home />} />
                <Route path="/Verification" element={<Verification />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router