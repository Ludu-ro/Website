import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { HomeNotLogged, Login, Register, Profile } from "../components/pages";
import { UserContext } from "../hooks";

function AppRoutes() {
  const { user } = useContext(UserContext);

  // not logged in paths
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<HomeNotLogged />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<HomeNotLogged />} />
      </Routes>
    );
  }

  // logged in paths
  return (
    <Routes>
      <Route path="/" element={<HomeNotLogged />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<HomeNotLogged />} />
    </Routes>
  );
}

export default AppRoutes;
