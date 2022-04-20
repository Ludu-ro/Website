import React, { useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { Badge, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

/**
 * Shows the number of online players.
 * Can use mock data.
 */
function OnlinePlayers() {
  const { isConnected, data, sendData } = useSocket({ isMock: true });

  useEffect(() => {
    if (isConnected) {
      sendData({ test: "test" });
    }
  }, [isConnected]);

  return (
    <Box>
      <Badge
        bg="light-gray"
        display="flex"
        color="inherit"
        alignItems="center"
        fontSize="lg"
        fontWeight="bold"
      >
        {data?.message || 0}
        <Box ml="1" mr="2" w="3" h="3" bg="red" borderRadius="100%" />
        <FontAwesomeIcon icon={faPeopleGroup} />
      </Badge>
    </Box>
  );
}

export default OnlinePlayers;
