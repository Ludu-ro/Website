import { Button } from "@chakra-ui/react";
import React from "react";

interface ActionButtonInterface {
  children: React.ReactNode;
  onClick: Function;
  width?: string;
}

function DeleteButton({ children, onClick, width }: ActionButtonInterface) {
  return (
    <Button
      onClick={() => onClick()}
      colorScheme='red'
      w={width || "32"}
    >
      {children}
    </Button>
  );
}

export default DeleteButton;
