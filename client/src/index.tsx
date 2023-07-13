import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "style/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </SnackbarProvider>,
);
reportWebVitals();
