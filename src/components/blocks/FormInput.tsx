import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

interface FormInputInterface {
  placeholder: string;
  label?: string;
  state: string;
  setter: Function;
  error: string;
  type?: string;
  width?: string;
  color?: string;
}

function FormInput({
  placeholder,
  label,
  state,
  setter,
  error,
  type,
  width,
  color,
}: FormInputInterface) {
  return (
    <FormControl width={width} variant="floating" isInvalid={!!error}>
      <FormHelperText mb="1" color={color}>
        {label}
      </FormHelperText>
      <Input
        bg="white"
        color="black"
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setter(e.target.value)}
        autoComplete="off"
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormInput;
