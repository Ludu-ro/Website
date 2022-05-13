import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomeNotLogged,
  Login,
  Register,
  Profile,
  Course,
} from "../components/pages";
import HomeLogged from "../components/pages/HomeLogged";
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
        <Route path="/course/" element={<Register />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  // logged in paths
  return (
    <Routes>
      <Route path="/" element={<HomeLogged />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/course/:id" element={<Course />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
