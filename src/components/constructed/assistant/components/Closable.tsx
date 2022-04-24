import React, { useEffect } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ClosableInterface {
  toggle: boolean;
  setCanClose: Function;
}

/**
 * Component used for dragging the assistant over to close it
 */
function Closable({ toggle, setCanClose }: ClosableInterface) {
  // mobile hacks
  useEffect(() => {
    const handleTouchMove: any = document.addEventListener("touchmove", (e) =>
      setCanClose(true)
    );
    const handleTouchEnd: any = document.addEventListener("touchend", (e) =>
      setCanClose(false)
    );
    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  if (!toggle) {
    return <React.Fragment />;
  }

  return (
    <Flex
      bottom="-1"
      w="100vw"
      h="32"
      bg="linear-gradient(rgba(0, 0, 0, 0), rgba(25, 25, 25, 25.9))"
      position="fixed"
      justifyContent="center"
      alignItems="center"
      onPointerEnter={() => setCanClose(true)}
      onPointerLeave={() => setCanClose(false)}
    >
      <Icon w="12" h="12">
        <FontAwesomeIcon color="white" icon={faTimes} />
      </Icon>
    </Flex>
  );
}

export default Closable;
