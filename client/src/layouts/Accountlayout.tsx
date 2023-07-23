import NavTabs from "components/UI/NavTabs";
import React from "react";
import { Outlet } from "react-router";

function Accountlayout() {
    return (
        <div className="account_layout flex flex-col items-center ">
            <div
            className="lg:w-[auto] w-full"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <h1>Account</h1>
                <p className="mb-[4rem] mt-[1.6rem]">
                    <span>Enrico Cole, </span>
                    ciseco@gmail.com · Los Angeles, CA
                </p>
                <NavTabs />
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Accountlayout;
