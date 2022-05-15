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

interface ModuleAccordionInterface {
  modules: ModuleType[];
  targetModule: ModuleType;
  setTargetModule: Function;
}

function ModuleAccordion({
  modules,
  targetModule,
  setTargetModule,
}: ModuleAccordionInterface) {
  const { user } = useContext(UserContext);

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
      defaultIndex={
        modules.findIndex((m) => m.moduleId === targetModule?.moduleId) || 0
      }
      p="2"
      allowToggle
      bg="secondary"
      textStyle="semibold"
    >
      <Text fontSize="xl" textAlign={"center"} p="2">
        Cuprins
      </Text>
      {modules.map((module) => (
        <AccordionItem key={module.moduleId}>
          <AccordionButton
            _expanded={{ bg: "primary-dark", color: "font-secondary" }}
          >
            <Box mr="4" flex="1" textAlign="left">
              {module.title}
            </Box>
            <ShowProgressIcon moduleId={module.moduleId} />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            onClick={() => setTargetModule(targetModule)}
            cursor={"pointer"}
            bg={module.moduleId === targetModule?.moduleId ? "tertiary" : ""}
            _hover={{ background: "gray.100" }}
            pb={4}
          >
            {module.description}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ModuleAccordion;
