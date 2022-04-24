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
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AssistantContext } from "../AssistantContext";
import AssistantImg from "../../../../assets/Assistant.png";

function Message({ text }: any) {
  return (
    <Flex alignItems="flex-start" mb="4">
      <Image alt="assistant icon" src={AssistantImg} w="10" mr="4" />
      <Box
        className="message"
        p="2"
        color="font-secondary"
        bg="primary"
        borderRadius="lg"
        w="100"
      >
        {text}
      </Box>
    </Flex>
  );
}

function Messenger({ showMessenger, setShowMessenger }: any) {
  const { archiveMessages } = useContext(AssistantContext);
  const close = () => setShowMessenger(false);

  return (
    <Modal size="full" isOpen={showMessenger} onClose={close}>
      <ModalContent>
        {/* Header */}
        <ModalHeader>
          <Flex gap="4" alignItems="center">
            <IconButton
              aria-label="assistant button"
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
              onClick={close}
            />
            <Box> Mesaje asistent</Box>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {archiveMessages.map((message, idx) => (
            <Message text={message} key={"message-" + idx} />
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Messenger;
