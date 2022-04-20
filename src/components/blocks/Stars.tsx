import { Box } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

/**
 * Shows a star rating from 1 to 5.
 */
function Stars({ rating }: { rating: number }) {
  return (
    <Box>
      {Array(Math.floor(rating))
        .fill("")
        .map(() => (
          <FontAwesomeIcon color="#FFD505" icon={faStar} />
        ))}
      {Array(5 - Math.floor(rating))
        .fill("")
        .map(() => (
          <FontAwesomeIcon color="gray" icon={faStar} />
        ))}
    </Box>
  );
}

export default Stars;
