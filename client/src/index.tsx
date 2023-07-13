import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "style/globals.scss";
import { SnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <SnackbarProvider maxSnack={3}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        ,
    </SnackbarProvider>,
);
reportWebVitals();
