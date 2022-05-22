import React, { useContext, useEffect, useState } from "react";
import { Flex, Text, Box, Icon, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../blocks";
import { getAchievements } from "../../../clients";
import { UserContext } from "../../../hooks";
import { Course, Module } from "../../../types";
import UserInfo from "./UserInfo";
import UserAchievements from "./UserAchievements";
import AssistantSettings from "./AssistantSettings";

function Profile() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [viewType, setViewType] = useState<string>("UserInfo");

  const [userCourses, setUserCourses] = useState<Array<Course>>([]);
  const [userAchievements, setUserAchievements] = useState<Array<string>>([]);
  const [userModules, setUserModules] = useState<Array<Module>>([]);

  useEffect(() => {
    if (!user) return;
    getAchievements(user.id).then((achievements) => {
      setUserAchievements(achievements);
    });
  }, [user]);

  console.log(user);

  return (
    <Flex
      pt="16"
      gap="4"
      placeItems="center"
      direction="column"
      bg="primary-dark"
      color="font-secondary"
    >
      <Text fontSize="2xl"> Profil </Text>

      <Flex gap="4">
        <Flex wrap="wrap" gap="4" direction="column">
          <ActionButton onClick={() => setViewType("UserInfo")}>
            Setari personale
          </ActionButton>
          <ActionButton onClick={() => setViewType("UserCourses")}>
            Cursurile mele
          </ActionButton>
          <ActionButton onClick={() => setViewType("AssistantSettings")}>
            Setari asistent
          </ActionButton>
          <ActionButton onClick={() => setViewType("UserStatistics")}>
            Statisticile mele
          </ActionButton>
          <ActionButton onClick={() => setViewType("UserAchievements")}>
            Premii castigate
          </ActionButton>
        </Flex>

        <Flex bg="primary" p="4" direction="column" gap="4">
          {viewType === "UserInfo" && <UserInfo />}
          {viewType === "AssistantSettings" && <AssistantSettings />}
          {viewType === "UserAchievements" && (
            <UserAchievements achievements={userAchievements} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;
