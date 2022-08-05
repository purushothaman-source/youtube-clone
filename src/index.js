import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-css-only/css/bootstrap.min.css";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
