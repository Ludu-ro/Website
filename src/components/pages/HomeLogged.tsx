import React, { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CoursesLibrary } from "../constructed";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../blocks";
import { UserContext } from "../../hooks/UserContext";

function HomeLogged() {

  const navigate = useNavigate();
  const { user, dispatch } = useContext(UserContext);

  if(user?.role === 'teacher'){
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
            Bine ai venit Teacher!
        </Text>

        <Flex gap="4">
            <ActionButton width="50" onClick={() => navigate("/addCourse")}>
            Adauga un curs nou
            </ActionButton>
        </Flex>

        {/* Rest of courses */}
        <Box mt="5%" mb="10">
            <CoursesLibrary />
        </Box>
        </Flex>
    );
  }
  else{

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
            Bine ai venit Student!
        </Text>

        {/* Rest of courses */}
        <Box mt="5%" mb="10">
            <CoursesLibrary />
        </Box>
        </Flex>
    );

  }
}

export default HomeLogged;
