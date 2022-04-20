import React, { useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CoursesLibrary } from "../constructed";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const PrimaryButton = ({ text, url }: any) => (
    <Button
      onClick={() => navigate(url)}
      borderRadius="3xl"
      bg="primary"
      color="white"
      w="32"
    >
      {text}
    </Button>
  );

  return (
    <Flex
      pt="16"
      gap="8"
      placeItems="center"
      direction="column"
      alignItems="center"
      bg="secondary"
      color="white"
    >
      {/* Title */}
      <Text fontSize="2xl" mt="10%">
        Bine ai venit!
      </Text>

      {/* Login & register buttons */}
      <Flex gap="4">
        <PrimaryButton url="/login" text="Autentificare" />
        <PrimaryButton url="/register" text="Inregistrare" />
      </Flex>

      {/* Rest of courses */}
      <Box mt="10%" mb="10">
        <CoursesLibrary />
      </Box>
    </Flex>
  );
}

export default Home;
