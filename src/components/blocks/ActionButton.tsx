import { Button } from "@chakra-ui/react";
import React from "react";

interface ActionButtonInterface {
  children: React.ReactNode;
  onClick: Function;
  width?: string;
}

function ActionButton({ children, onClick, width }: ActionButtonInterface) {
  return (
    <Button
      onClick={() => onClick()}
      bg="tertiary"
      color="font-secondary"
      w={width || "32"}
    >
      {children}
    </Button>
  );
}

export default ActionButton;
