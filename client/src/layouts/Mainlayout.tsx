import Footer from "components/Shared/Footer";
import Header from "components/Shared/Header/Header";
import React from "react";
import { Outlet } from "react-router";

function Mainlayout() {
    return (
        <>
            <div className="main_layout">
                <Header />
                <div className="mt-[7.2rem]">
                <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Mainlayout;
