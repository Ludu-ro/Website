import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
  Text,
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { UserContext, UserActionType } from "../../hooks/";
import { ActionButton } from "../blocks";
import { login } from "../../clients";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await login({ email, password });
    dispatch({
      type: UserActionType.SetUser,
      user,
    });
  };

  // redirect on successful login
  useEffect(() => {
    if (!user) return;
    navigate("/");
  }, [user]);

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
        <FormControl variant="floating" id="form-username" isRequired>
          <Input
            placeholder="Username"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <FormErrorMessage>Your username can not be empty</FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl variant="floating" id="form-password" isRequired>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <FormErrorMessage>Your password can not be empty</FormErrorMessage>
        </FormControl>
      </Box>
      <ActionButton onClick={handleLogin}>Autentificare</ActionButton>
    </Flex>
  );
}

export default Login;
