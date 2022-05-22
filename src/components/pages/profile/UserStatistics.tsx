// import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import { Flex, Text, Box, Icon, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../blocks";
import { getAchievements } from "../../../clients";
import { UserActionType, UserContext } from "../../../hooks";
import { Course, Module, Student } from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLogOut } from "react-icons/bi";
import Field from "./Field";

function UserStatistics() {
  const { user, dispatch } = useContext(UserContext);

  return (
    <> Statistici
    </>
  );
}

export default UserStatistics;
