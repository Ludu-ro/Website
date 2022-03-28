import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Stars({ rating }: { rating: number }) {
  return (
    <>
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
    </>
  );
}

export default Stars;
