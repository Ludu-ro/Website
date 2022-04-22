import React from "react";
import { 
  Flex, 
  Text, 
  Container,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box, 
  Button
} from "@chakra-ui/react";

function Login() {
  return (
    <Flex
      pt="16"
      gap="4"
      placeItems="center"
      direction="column"
      alignItems="center"
      bg="primary-dark"
      color="font-secondary"
    >
      <Text fontSize="2xl"> Autentificare </Text>
      <Box pt={8}>
        <FormControl variant='floating' id='form-username' isRequired>
            <Input placeholder='Username' />
            <FormErrorMessage>Your username can not be empty</FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl variant='floating' id='form-password' isRequired>
            <Input type='password' placeholder="Password" />
            <FormErrorMessage>Your password can not be empty</FormErrorMessage>
        </FormControl>
      </Box>
      <Button
        bg="tertiary"
        color="font-secondary"
        w="32"
      >
      Login
      </Button>
    </Flex>
  );
}

export default Login;
