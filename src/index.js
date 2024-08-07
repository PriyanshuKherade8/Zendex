import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MiniDrawer from "./modules/DashBoard";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <MiniDrawer />
  </BrowserRouter>,
  document.getElementById("root")
);
