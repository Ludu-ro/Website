import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeNotLogged, Login, Register } from "../components/pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeNotLogged />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
