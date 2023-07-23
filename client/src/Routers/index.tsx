import Accountlayout from "layouts/Accountlayout";
import Mainlayout from "layouts/Mainlayout";
import AccountOrder from "pages/AccountPage/AccountOrder";
import AccountPage from "pages/AccountPage/AccountPage";
import ChangeBilling from "pages/AccountPage/ChangeBilling";
import ChangePassword from "pages/AccountPage/ChangePassword";
import SavedList from "pages/AccountPage/SavedList";
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
                
                <Route path={ROUTE.ACCOUNT} element={<Accountlayout />}>
                    <Route index element={<AccountPage />} />
                    <Route path={ROUTE.SAVED_LIST} element={<SavedList />} />
                    <Route
                        path={ROUTE.ACCOUNT_BILLING}
                        element={<ChangeBilling />}
                    />
                    <Route
                        path={ROUTE.ACCOUNT_CHANGE_PASS}
                        element={<ChangePassword />}
                    />
                    <Route
                        path={ROUTE.ACCOUNT_ORDED}
                        element={<AccountOrder />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};

export default Routing;
