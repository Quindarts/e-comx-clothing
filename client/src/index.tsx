import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "style/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ScrollToTop from "layouts/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SnackbarProvider maxSnack={3}>
    <BrowserRouter>
      <ScrollToTop />
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
  </SnackbarProvider>
);
reportWebVitals();
