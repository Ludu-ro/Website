import { Box, Image, Text } from "@chakra-ui/react";
import AssistantImg from "../../assets/Assistant.png";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

interface BubbleInterface {
  text: string;
  position: "left" | "right";
}
function Bubble({ text, position }: BubbleInterface) {
  return (
    <Box
      color="black"
      p="2"
      bg="white"
      position="absolute"
      right={position === "right" ? "16" : "unset"}
      left={position === "left" ? "16" : "unset"}
      bottom="32"
      borderRadius="lg"
      className={`speech-bubble-${position}`}
      w={Math.log(text.length) * 50}
      border="1px solid black"
      zIndex={101}
    >
      <Text> {text}</Text>
    </Box>
  );
}

function Assistant() {
  const messages = [
    "Bine ai venit!",
    "Cu ce te pot ajuta?",
    "Logheaza-te sau inregistreaza-te pentru a putea accesa cursurile.",
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  const [messageLength, setMessageLength] = useState(0);
  const [bubbleText, setBubbleText] = useState("");
  const [position, setPosition] = useState<any>("right");

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
        onPointerUp={(e) =>
          setPosition(e.screenX < window.innerWidth / 2 ? "left" : "right")
        }
        className="no-drag"
        position="fixed"
        right={5}
        bottom={0}
      >
        {bubbleText && <Bubble text={bubbleText} position={position} />}
        <Image alt="Assistant face" src={AssistantImg} w="24" h="130" />
      </Box>
    </Draggable>
  );
}

export default Assistant;
