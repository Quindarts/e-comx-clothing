import Mainlayout from "layouts/Mainlayout";
import Component from "pages/Component";
import HomePage from "pages/HomePage";
import { Route, Routes } from "react-router";
import { ROUTE } from "utils/constants";
function App() {
    return (
        <Routes>
            <Route path={ROUTE.INDEX} element={<Mainlayout />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTE.COMPONENT} element={<Component />} />
            </Route>
        </Routes>
    );
}

export default App;
