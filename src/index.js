import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
