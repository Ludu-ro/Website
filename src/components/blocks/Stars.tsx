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
      <FontAwesomeIcon color={rating >= 1 ? "#FFD505" : "gray"} icon={faStar} />
      <FontAwesomeIcon color={rating >= 2 ? "#FFD505" : "gray"} icon={faStar} />
      <FontAwesomeIcon color={rating >= 3 ? "#FFD505" : "gray"} icon={faStar} />
      <FontAwesomeIcon color={rating >= 4 ? "#FFD505" : "gray"} icon={faStar} />
      <FontAwesomeIcon color={rating == 5 ? "#FFD505" : "gray"} icon={faStar} />
    </Box>
  );
}

export default Stars;
