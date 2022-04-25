import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AssistantContext } from "../AssistantContext";
import Message from "./Message";

function MessagesList() {
  const { archiveMessages } = useContext(AssistantContext);

  return (
    <Box>
      {archiveMessages.map((message, idx) => (
        <Message text={message} key={"message-" + idx} />
      ))}
    </Box>
  );
}

export default MessagesList;
