import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

interface AchievementInterface {
  type:
    | "NewUser"
    | "FirstPythonCourse"
    | "FirstJavaCourse"
    | "FirstMySqlCourse"
    | "FirstAwsCourse"
    | "FirstModuleFinished"
    | "GoodQuizScore";
}

function Achievement({ type }: AchievementInterface) {
  const messageMap = {
    NewUser: "Bine ai venit!",
    FirstPythonCourse: "Primul curs de Python!",
    FirstJavaCourse: "Primul curs de Java!",
    FirstMySqlCourse: "Primul curs de MySql!",
    FirstAwsCourse: "Primul curs de AWS!",
    FirstModuleFinished: "Knowledge is power!",
    GoodQuizScore: "Toba de carte!",
  };

  const descriptionMap = {
    NewUser: "Te-ai inregistrat pentru prima data!",
    FirstPythonCourse: "Ai inceput primul tau curs de Python!",
    FirstJavaCourse: "Ai inceput primul tau curs de Java!",
    FirstMySqlCourse: "Ai inceput primul tau curs de MySQL!",
    FirstAwsCourse: "Ai inceput primul tau curs de AWS!",
    FirstModuleFinished: "Ai terminat primul tau modul!",
    GoodQuizScore: "Ai obtinut o nota buna la un quiz!",
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
          <Text fontSize="x-small">{descriptionMap[type]}</Text>
        </Flex>
      </Flex>
    ),
  };

  return ret;
}

export default Achievement;
