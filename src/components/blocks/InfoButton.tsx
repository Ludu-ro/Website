import { Button } from "@chakra-ui/react";
import React from "react";

interface InfoButtonInterface {
  children: React.ReactNode;
  onClick: Function;
  width?: string;
}

function InfoButton({ children, onClick, width }: InfoButtonInterface) {
  return (
    <Button
      onClick={() => onClick()}
      colorScheme="blackAlpha"
      w={width || "32"}
    >
      {children}
    </Button>
  );
}

export default InfoButton;
