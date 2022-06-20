import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { MainBoard } from "./components/MainBoard";
import "./index.scss";

function App() {
  return (
    <Routes>
      <Route path="/react_project_1" element={<Login />} />
      <Route path="/activities" element={<MainBoard />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
