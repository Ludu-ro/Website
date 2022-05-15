import { Button } from "@chakra-ui/react";
import React from "react";

interface ActionButtonInterface {
  children: React.ReactNode;
  onClick: Function;
  width?: string;
  disabled?: boolean;
}

function ActionButton({
  children,
  onClick,
  width,
  disabled,
}: ActionButtonInterface) {
  return (
    <Button
      onClick={() => onClick()}
      bg="tertiary"
      color="font-primary"
      w={width || "32"}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default ActionButton;
