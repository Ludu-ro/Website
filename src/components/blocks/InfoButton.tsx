import { Button } from "@chakra-ui/react";
import React from "react";

interface InfoButtonInterface {
  children: React.ReactNode;
  onClick: Function;
  width?: string;
  isLoading?: boolean;
}

function InfoButton({
  children,
  onClick,
  width,
  isLoading,
}: InfoButtonInterface) {
  return (
    <Button
      onClick={() => onClick()}
      bg="gray.200"
      color="font-primary"
      w={width || "32"}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
}

export default InfoButton;
