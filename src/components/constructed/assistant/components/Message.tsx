import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import AssistantImg from "../../../../assets/Assistant.png";

function Message({ text }: { text: string }) {
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

export default Message;
