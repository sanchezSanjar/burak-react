import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./app/MaterialTheme";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./app/context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);