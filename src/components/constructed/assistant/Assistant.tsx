import React, { useContext, useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import AssistantImg from "../../../assets/Assistant.png";
import Draggable, { DraggableData } from "react-draggable";
import useBubbleText from "./hooks/useBubbleText";
import { Bubble, Closable, Messenger } from "./components/";
import { AssistantContext } from "./AssistantContext";

function Assistant() {
  const { isClosed, setIsClosed, messages, setMessages } =
    useContext(AssistantContext);
  const [toggleClosable, setToggleClosable] = useState(false);
  const [canClose, setCanClose] = useState(false);
  const [position, setPosition] = useState<any>("right");

  // get bubble text for each message in the messages array
  const { bubbleText } = useBubbleText({
    message: messages[0],
    textSpeed: 50,
    finishTime: 1000,
    onFinish: () => setMessages(messages.slice(1)),
  });

  // small UI details here
  useEffect(() => {
    if (isClosed) {
      setToggleClosable(false);
    } else {
      setCanClose(false);
    }
  }, [isClosed]);

  // if assistant is clicked instead of dragged, a messages window will open
  const [showMessenger, setShowMessenger] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: any, data: DraggableData) => {
    setToggleClosable(true);
    setStartPosition({ x: data.x, y: data.y });
  };

  const handleDragEnd = (e: any, data: DraggableData) => {
    const isClick = startPosition.x === data.x && startPosition.y === data.y;
    setPosition(e.screenX < window.innerWidth / 2 ? "left" : "right");
    setToggleClosable(false);
    if (isClick) {
      setShowMessenger(true);
    } else if (data.y >= -100) {
      // close assistant is in the bottom of the screen
      setIsClosed(true);
    }
  };

  if (isClosed) {
    return <React.Fragment />;
  }

  return (
    <>
      <Messenger
        showMessenger={showMessenger}
        setShowMessenger={setShowMessenger}
      />

      <Draggable onStart={handleDragStart} onStop={handleDragEnd}>
        <Box
          className="no-drag"
          position="fixed"
          right={5}
          bottom={0}
          opacity={canClose ? 0.5 : 1}
          _hover={{ opacity: 0.9 }}
          cursor="pointer"
          display={showMessenger ? "none" : "block"}
        >
          <Bubble text={bubbleText} position={position} />
          <Image alt="Assistant face" src={AssistantImg} w="16" />
        </Box>
      </Draggable>

      <Closable toggle={toggleClosable} setCanClose={setCanClose} />
    </>
  );
}

export default Assistant;
