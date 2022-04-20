import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { OnlinePlayers } from "../blocks";

function Topnav() {
  return (
    <Flex color="white" bg="secondary-dark" p="4" alignItems="center">
      <Text ml="2" flex="1" fontSize="xl" fontWeight="bold">
        <Link to="/">Ludu Academy </Link>
      </Text>
      <OnlinePlayers />
    </Flex>
  );
}

export default Topnav;
