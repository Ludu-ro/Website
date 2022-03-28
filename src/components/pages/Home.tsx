import React, { useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CoursesLibrary } from "../constructed";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Flex
      pt="16"
      gap="4"
      placeItems="center"
      direction="column"
      alignItems="center"
      bg="background"
      color="white"
    >
      <Text fontSize="2xl"> Bine ai venit! </Text>
      <Flex color="white" gap="4">
        <Button
          onClick={() => navigate("/login")}
          borderRadius="3xl"
          bg="primary"
          w="32"
        >
          Logare
        </Button>

        <Button
          onClick={() => navigate("/register")}
          borderRadius="3xl"
          bg="primary"
          w="32"
        >
          Inregistreare
        </Button>
      </Flex>

      <CoursesLibrary />
    </Flex>
  );
}

export default Home;
