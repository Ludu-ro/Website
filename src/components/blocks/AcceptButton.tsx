import { Button } from "@chakra-ui/react";
import React from "react";

interface ActionButtonInterface {
  children: React.ReactNode;
  onClick: Function;
  width?: string;
}

function AcceptButton({ children, onClick, width }: ActionButtonInterface) {
  return (
    <Button
      onClick={() => onClick()}
      colorScheme='teal'
      w={width || "32"}
    >
      {children}
    </Button>
  );
}

export default AcceptButton;
