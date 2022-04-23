import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { HomeNotLogged, Login, Register } from "../components/pages";
import HomeLogged from "../components/pages/HomeLogged";
import Profile from "../components/pages/Profile";
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
      </Routes>
    );
  }

  // logged in paths
  return (
    <Routes>
      <Route path="/" element={<HomeLogged />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default AppRoutes;
