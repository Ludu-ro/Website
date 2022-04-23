import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

interface DualFormInputInterface {
  placeholder: Array<string>;
  label?: string;
  state: Array<string>;
  setter: Array<Function>;
  error: Array<string>;
  type?: string;
  width?: string;
  color?: string;
}

function DualFormInput({
  placeholder,
  label,
  state,
  setter,
  error,
  type,
  width,
  color,
}: DualFormInputInterface) {
  return (
    <FormControl
      width={width}
      variant="floating"
      id="form-mail"
      isInvalid={!!error[0] || !!error[1]}
    >
      <FormHelperText mb="1" color={color}>
        {label}
      </FormHelperText>
      <Flex gap="4" color="black">
        <Box>
          <Input
            bg="white"
            color="black"
            type={type}
            placeholder={placeholder[0]}
            value={state[0]}
            onChange={(e) => setter[0](e.target.value)}
            autoComplete="off"
          />
          <FormErrorMessage>{error[0]}</FormErrorMessage>
        </Box>
        <Box>
          <Input
            bg="white"
            color="black"
            type={type}
            placeholder={placeholder[1]}
            value={state[1]}
            onChange={(e) => setter[1](e.target.value)}
            autoComplete="off"
          />
          <FormErrorMessage>{error[1]}</FormErrorMessage>
        </Box>
      </Flex>
    </FormControl>
  );
}

export default DualFormInput;
