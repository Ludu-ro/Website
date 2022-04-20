import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function Login() {
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
      <Text fontSize="2xl"> Autentificare </Text>
    </Flex>
  );
}

export default Login;
