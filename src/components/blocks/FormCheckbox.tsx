import React from "react";
import { Flex, Box, FormControl, FormHelperText } from "@chakra-ui/react";

interface FormCheckboxInterface {
  label: string;
  valueLeft: string;
  valueRight: string;
  labelLeft: string;
  labelRight: string;
  state: string;
  setter: Function;
  width?: string;
  color?: string;
}

function FormCheckbox({
  label,
  valueLeft,
  valueRight,
  labelLeft,
  labelRight,
  state,
  setter,
  width,
  color,
}: FormCheckboxInterface) {
  return (
    <FormControl w={width} variant="floating">
      <FormHelperText mb="1" color={color}>
        {label}
      </FormHelperText>
      <Flex gap="4">
        <Box
          cursor="pointer"
          textAlign="center"
          w="24"
          p="2"
          _hover={{ opacity: 0.8 }}
          fontWeight={state === valueLeft ? "bold" : "normal"}
          bg={state === valueLeft ? "tertiary" : "gray.200"}
          color="font-primary"
          borderRadius="md"
          onClick={() => setter(valueLeft)}
        >
          {labelLeft}
        </Box>
        <Box
          cursor="pointer"
          textAlign="center"
          w="24"
          p="2"
          _hover={{ opacity: 0.8 }}
          fontWeight={state === valueRight ? "bold" : "normal"}
          bg={state === valueRight ? "tertiary" : "gray.200"}
          color="font-primary"
          borderRadius="md"
          onClick={() => setter(valueRight)}
        >
          {labelRight}
        </Box>
      </Flex>
    </FormControl>
  );
}

export default FormCheckbox;
