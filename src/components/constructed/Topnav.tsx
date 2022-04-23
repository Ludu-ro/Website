import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { OnlinePlayers } from "../blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Topnav() {
  const navigate = useNavigate();

  return (
    <Flex color="font-secondary" bg="primary" p="4" alignItems="center">
      <Text ml="2" flex="1" fontSize="xl" fontWeight="bold">
        <Link to="/">Ludu Academy </Link>
      </Text>
      <Box mr={8}>
        <FontAwesomeIcon icon={faUserAlt} onClick={() => {navigate("/profile")}}/>
      </Box>
    </Flex>
  );
}

export default Topnav;
