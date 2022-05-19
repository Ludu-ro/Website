import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import { Module as ModuleType, ModuleStatus, Status, User } from "../../types";
import { CheckCircleIcon, LockIcon, SpinnerIcon } from "@chakra-ui/icons";
import { UserContext } from "../../hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface ModuleAccordionInterface {
  modules: ModuleType[];
  targetModule: ModuleType;
}

function ModuleAccordion({ modules, targetModule }: ModuleAccordionInterface) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const { user } = useContext(UserContext);
  const isQuizPage = pathname.includes("quiz");

  function ShowProgressIcon({ moduleId }: any) {
    var m: ModuleStatus | undefined = user?.courses?.find(
      (m: ModuleStatus) => m.id === moduleId
    );
    if (!m) {
      return <LockIcon color="black" />;
    }
    if (m.status.toString() === Status[Status.Finished].toLowerCase()) {
      return <CheckCircleIcon color="green" />;
    }
    if (m.status.toString() === Status[Status.Started].toLowerCase()) {
      return <SpinnerIcon color="orange" />;
    }
    return <LockIcon color="black" />;
  }

  return (
    <Accordion
      defaultIndex={modules.findIndex(
        (m) => m.moduleId === targetModule.moduleId
      )}
      p="2"
      allowToggle
      bg="secondary"
      textStyle="semibold"
    >
      {/* Title */}
      <Text fontSize="xl" textAlign={"center"} p="2">
        Cuprins
      </Text>

      {/* Modules */}
      {modules.map((module) => (
        <AccordionItem key={module.moduleId}>
          {/* Module group */}
          <AccordionButton
            _expanded={{ bg: "primary-dark", color: "font-secondary" }}
          >
            <Box mr="4" flex="1" textAlign="left">
              {module.title}
            </Box>
            <ShowProgressIcon moduleId={module.moduleId} />
            <AccordionIcon />
          </AccordionButton>

          {/* Module panel */}
          <AccordionPanel
            onClick={() =>
              navigate(`/course/${courseId}/module/${module.moduleId}`)
            }
            cursor={"pointer"}
            bg={
              module.moduleId === targetModule?.moduleId && !isQuizPage
                ? "tertiary"
                : ""
            }
            _hover={{
              background:
                module.moduleId === targetModule?.moduleId
                  ? "tertiary"
                  : "gray.100",
            }}
            pb={4}
          >
            {module.description}
          </AccordionPanel>

          {/* Quiz panel */}
          {module.quiz && (
            <AccordionPanel
              onClick={() =>
                navigate(`/course/${courseId}/module/${module.moduleId}/quiz`)
              }
              cursor={"pointer"}
              bg={
                module.moduleId === targetModule?.moduleId && isQuizPage
                  ? "tertiary"
                  : ""
              }
              _hover={{
                background:
                  module.moduleId === targetModule?.moduleId
                    ? "tertiary"
                    : "gray.100",
              }}
              pb={4}
            >
              {module.quiz.name}
            </AccordionPanel>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ModuleAccordion;
