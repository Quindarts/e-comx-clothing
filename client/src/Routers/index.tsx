import Mainlayout from "layouts/Mainlayout";
import Component from "pages/Component";
import HomePage from "pages/HomePage/HomePage";
import React from "react";
import { Route, Routes } from "react-router";
import { ROUTE } from "utils/constants";

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE.INDEX} element={<Mainlayout />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTE.COMPONENT} element={<Component />} />
            </Route>
        </Routes>
    );
};

export default Routing;
