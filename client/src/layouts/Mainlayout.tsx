import React from "react";
import { Outlet } from "react-router";

function Mainlayout() {
    return (
        <div className="main_layout">
            <Outlet />
        </div>
    );
}

export default Mainlayout;
