import React from "react";
import { 
  Flex, 
  Text, 
  FormControl,
  FormErrorMessage,
  Input,
  Box, 
  Button
} from "@chakra-ui/react";

function Register() {
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
      <Text fontSize="2xl"> Register </Text>
      <Box pt={8}>
        <FormControl variant='floating' id='form-username' isRequired>
            <Input placeholder='Username' />
            <FormErrorMessage>Your username can not be empty</FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl variant='floating' id='form-mail' isRequired>
            <Input placeholder='Mail' />
            <FormErrorMessage>Your mail is invalid</FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl variant='floating' id='form-password' isRequired>
            <Input type='password' placeholder="Password" />
            <FormErrorMessage>Your password can not be empty</FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl variant='floating' id='form-repassword' isRequired>
            <Input type='password' placeholder="Re-type password" />
            <FormErrorMessage>Your passwords do not match</FormErrorMessage>
        </FormControl>
      </Box>
      <Button
        bg="tertiary"
        color="font-secondary"
        w="32"
      >
      Register
      </Button>
    </Flex>
  );
}

export default Register;
