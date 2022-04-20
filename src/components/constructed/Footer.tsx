import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex color="white" bg="secondary-dark" p="4" alignItems="center">
      <Text flex="1" fontSize="small" fontWeight="bold">
        Copyright © {new Date().getFullYear()}
      </Text>
    </Flex>
  );
}

export default Footer;
