import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomeNotLogged,
  Login,
  Register,
  Profile,
  Course,
} from "../components/pages";
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
        <Route></Route>
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
      <Route path="/register" element={<Register />} />
      <Route path="/course/:id" element={<Course />} />
    </Routes>
  );
}

export default AppRoutes;
