import React from "react";
import {
  Flex,
  Text,
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../blocks";
import getAchievements from "../../clients/achievements/getUserAchievements";

function Profile() {
  const navigate = useNavigate();

  //exemplu de obtinere de achievements
  getAchievements("123").then((achievements) => {
    console.log(achievements);
  });

  return (
    <Flex
      pt="16"
      gap="4"
      placeItems="center"
      direction="column"
      alignItems="center"
      bg="primary-dark"
      color="font-secondary"
    >
      <Text fontSize="2xl"> Profil </Text>
      <Box pt={8}>
        <ActionButton onClick={() => {}}> Setari personale </ActionButton>
      </Box>
      <Box>
        <ActionButton onClick={() => {}}> Cursurile mele </ActionButton>
      </Box>
      <Box>
        <ActionButton onClick={() => {}}> Setari asistent </ActionButton>
      </Box>
      <Box>
        <ActionButton onClick={() => {}}> Statisticile mele </ActionButton>
      </Box>
      <Box>
        <ActionButton onClick={() => {}}> Premii castigate </ActionButton>
      </Box>
    </Flex>
  );
}

export default Profile;
