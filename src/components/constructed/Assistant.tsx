import { Box, Image, Text } from "@chakra-ui/react";
import AssistantImg from "../../assets/Assistant.png";
import React, { useEffect, useState } from "react";

function Bubble({ message }: any) {
  return (
    <Box
      color="black"
      p="2"
      bg="white"
      position="absolute"
      right="16"
      bottom="32"
      borderRadius="lg"
      className="speech-bubble"
      w={Math.log(message.length) * 50}
      border="1px solid black"
    >
      <Text> {message}</Text>
    </Box>
  );
}

function Assistant({ left, right, top, bottom }: any) {
  const messages = [
    "Bine ai venit!",
    "Cu ce te pot ajuta?",
    "Logheaza-te sau inregistreaza-te pentru a putea accesa cursurile.",
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex) => (messageIndex + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="fixed" left={left} right={right} top={top} bottom={bottom}>
      <Bubble message={messages[messageIndex]} />
      <Image alt="Assistant face" src={AssistantImg} w="24" />
    </Box>
  );
}

export default Assistant;
