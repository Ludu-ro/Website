import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Image,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import MessagesList from "./MessagesList";
import { AssistantContext } from "../AssistantContext";

function Messenger({ showMessenger, setShowMessenger }: any) {
  const closeMessenger = () => setShowMessenger(false);
  const { setIsClosed } = useContext(AssistantContext);

  // non-mobile version
  if (window.innerWidth >= 768) {
    return (
      <Box
        position="fixed"
        bottom="0"
        display={showMessenger ? "block" : "none"}
        right="10"
        w="64"
        bg="white"
        border="1px solid"
        borderColor="white"
      >
        <Flex
          cursor="pointer"
          alignItems="center"
          p="2"
          bg="primary-dark"
          color="font-secondary"
          onClick={closeMessenger}
        >
          <Text flex="1">Mesaje asistent</Text>
          <IconButton
            aria-label="minimize messenger button"
            bg="transparent"
            size="sm"
            icon={<FontAwesomeIcon icon={faMinus} />}
            onClick={() => setShowMessenger(false)}
          />
          <IconButton
            aria-label="close messenger button"
            bg="transparent"
            size="sm"
            icon={<FontAwesomeIcon icon={faTimes} />}
            onClick={() => setIsClosed(true)}
          />
        </Flex>
        <Box
          p="2"
          h="72"
          overflow="auto"
          border="2px solid"
          borderColor="primary-dark"
        >
          <MessagesList />
        </Box>
      </Box>
    );
  }

  // mobile version
  return (
    <Modal size="full" isOpen={showMessenger} onClose={closeMessenger}>
      <ModalContent>
        {/* Header */}
        <ModalHeader>
          <Flex gap="4" alignItems="center">
            <IconButton
              aria-label="close messenger button"
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
              onClick={closeMessenger}
            />
            <Box> Mesaje asistent</Box>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />

        {/* Messages */}
        <ModalBody>
          <MessagesList />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Messenger;
