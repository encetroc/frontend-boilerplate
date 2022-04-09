import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../../frontend-boilerplate/src/App";
import reportWebVitals from "../../frontend-boilerplate/src/reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Home, NotFound } from "pages";
import { PrivateRoute } from "components";
import { AuthContextProvider } from "context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="landing" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
