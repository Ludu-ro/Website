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
          _hover={{ background: state === valueLeft ? "black" : "gray" }}
          bg={state === valueLeft ? "primary" : "white"}
          color={state === valueLeft ? "font-secondary" : "font-primary"}
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
          _hover={{ background: state === valueRight ? "black" : "gray" }}
          bg={state === valueRight ? "primary" : "white"}
          color={state === valueRight ? "font-secondary" : "font-primary"}
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
