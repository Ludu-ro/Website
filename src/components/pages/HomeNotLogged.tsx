import React, { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CoursesLibrary } from "../constructed";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../blocks";
import { UserContext } from "../../hooks";
import HomeLogged from "./HomeLogged";

function HomeNotLogged() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    return <HomeLogged />;
  }

  return (
    <Flex
      pt="16"
      gap="8"
      placeItems="center"
      direction="column"
      bg="primary-dark"
      color="font-secondary"
    >
      {/* Title */}
      <Text color="font-secondary" fontSize="3xl" mt="5%">
        Bine ai venit!
      </Text>

      {/* Login & register buttons */}
      <Flex gap="4">
        <ActionButton onClick={() => navigate("/login")}>
          Autentificare
        </ActionButton>
        <ActionButton onClick={() => navigate("/register")}>
          Inregistrare
        </ActionButton>
      </Flex>

      {/* Rest of courses */}
      <Box mt="5%" mb="10">
        <CoursesLibrary />
      </Box>
    </Flex>
  );
}

export default HomeNotLogged;
