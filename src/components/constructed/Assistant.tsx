import { Box, Image, Text } from "@chakra-ui/react";
import AssistantImg from "../../assets/Assistant.png";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

function Bubble({ text }: { text: string }) {
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
      w={Math.log(text.length) * 50}
      border="1px solid black"
    >
      <Text> {text}</Text>
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
  const [messageLength, setMessageLength] = useState(0);
  const [bubbleText, setBubbleText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbleText("");
      setMessageIndex((messageIndex) => {
        const newIndex = (messageIndex + 1) % messages.length;
        setMessageLength(messages[newIndex].length);
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // set message with every letter
    const interval = setInterval(() => {
      setBubbleText((bubbleText) =>
        bubbleText.length < messageLength
          ? bubbleText + messages[messageIndex][bubbleText.length]
          : bubbleText
      );
    }, 25);
    return () => clearInterval(interval);
  }, [messageIndex, messageLength]);

  return (
    <Draggable>
      <Box
        className="no-drag"
        position="fixed"
        left={left}
        right={right}
        top={top}
        bottom={bottom}
      >
        {bubbleText && <Bubble text={bubbleText} />}
        <Image alt="Assistant face" src={AssistantImg} w="24" h="130" />
      </Box>
    </Draggable>
  );
}

export default Assistant;
