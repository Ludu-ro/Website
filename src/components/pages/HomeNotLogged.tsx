import React, { useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Assistant, CoursesLibrary } from "../constructed";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const PrimaryButton = ({ text, url }: any) => (
    <Button
      onClick={() => navigate(url)}
      bg="tertiary"
      color="font-secondary"
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
      bg="primary-dark"
      color="font-secondary"
      position="relative"
    >
      {/* Title */}
      <Text color="font-secondary" fontSize="3xl" mt="5%">
        Bine ai venit!
      </Text>

      {/* Login & register buttons */}
      <Flex gap="4">
        <PrimaryButton url="/login" text="Autentificare" />
        <PrimaryButton url="/register" text="Inregistrare" />
      </Flex>

      {/* Rest of courses */}
      <Box mt="5%" mb="10">
        <CoursesLibrary />
      </Box>

      <Assistant right="5" bottom="0" />
    </Flex>
  );
}

export default Home;
