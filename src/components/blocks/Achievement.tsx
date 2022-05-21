import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

interface AchievementInterface {
  type: "NewUser";
}

function Achievement({ type }: AchievementInterface) {
  const messageMap = {
    NewUser: "Bine ai venit!",
  };

  const ret: any = {
    position: "bottom-left",
    render: () => (
      <Flex
        alignItems="center"
        color="font-primary"
        p="3"
        bg="tertiary"
        borderRadius="lg"
        gap="4"
      >
        <Icon fontSize="2xl">
          <FontAwesomeIcon icon={faAward} />
        </Icon>
        <Flex direction="column" justifyContent="center">
          <Text fontWeight="bold">Noua realizare</Text>
          <Text>{messageMap[type]}</Text>
        </Flex>
      </Flex>
    ),
  };

  return ret;
}

export default Achievement;
