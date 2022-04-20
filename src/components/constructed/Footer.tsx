import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex color="font-secondary" bg="primary" p="4" alignItems="center">
      <Text flex="1" fontSize="small" fontWeight="bold">
        Copyright © {new Date().getFullYear()}
      </Text>
    </Flex>
  );
}

export default Footer;
