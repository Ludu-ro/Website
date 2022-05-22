import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface FieldInterface {
  label: string;
  value: string;
  isEditable?: boolean;
}

function Field({ label, value, isEditable }: FieldInterface) {
  return (
    <Flex gap="4">
      <Text w="40" fontWeight="bold">
        {label}
      </Text>
      <Text>
        {value}
        {isEditable && (
          <Icon ml="2" cursor="pointer">
            <FontAwesomeIcon icon={faEdit} />
          </Icon>
        )}
      </Text>
    </Flex>
  );
}

export default Field;
