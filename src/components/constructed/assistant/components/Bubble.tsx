import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface BubbleInterface {
  text: string;
  position: "left" | "right";
}

function Bubble({ text, position }: BubbleInterface) {
  if (!text) {
    return <React.Fragment />;
  }

  return (
    <Box
      color="black"
      p="2"
      bg="white"
      position="absolute"
      right={position === "right" ? "8" : "unset"}
      left={position === "left" ? "8" : "unset"}
      bottom="20"
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

export default Bubble;
