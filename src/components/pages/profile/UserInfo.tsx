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

function UserInfo() {
  const { user, dispatch } = useContext(UserContext);

  return (
    <>
      {/* username */}
      <Field
        label="Nume utilizator:"
        value={`${user?.firstName} ${user?.lastName}`}
        isEditable
      />

      {/* email */}
      <Field label="Email:" value={`${user?.email} `} isEditable />

      {/* xp and level */}
      {user?.role === "student" && (
        <>
          <Field label="XP:" value={`${(user as Student)?.xp}`} />
          <Field label="Level:" value={`${(user as Student)?.level}`} />
        </>
      )}

      {/* logout */}
      <ActionButton
        onClick={() => {
          localStorage.clear();
          dispatch({
            type: UserActionType.SetUser,
            user: null,
          });
          window.location.replace("/");
        }}
        width="100%"
      >
        <Icon marginRight="2" as={BiLogOut}></Icon>
        Iesi din cont
      </ActionButton>
    </>
  );
}

export default UserInfo;
