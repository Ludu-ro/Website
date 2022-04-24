import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
  Text,
  FormControl,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import { UserContext, UserActionType } from "../../hooks/";
import { ActionButton, FormInput, InfoButton } from "../blocks";
import { login } from "../../clients";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await login({ username, password });
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

      <Flex
        direction="column"
        placeItems="center"
        gap="2"
        bg="secondary"
        p="4"
        w={["sm", "md"]}
        borderRadius="lg"
      >
        <FormInput
          label="Numele de utilizator:"
          placeholder="Username"
          state={username}
          setter={setUsername}
          error={""} //todo
          color="font-primary"
        />
        <FormInput
          label="Parola:"
          placeholder="Parola"
          state={password}
          setter={setPassword}
          error={""} //todo
          color="font-primary"
        />

        <ActionButton width="100%" onClick={handleLogin}>
          Autentificare
        </ActionButton>

        <Flex color="font-primary" gap="4" w="100%" alignItems="center">
          <Divider />
          sau
          <Divider />
        </Flex>

        <InfoButton width="100%" onClick={() => navigate("/register")}>
          Creaza cont
        </InfoButton>
      </Flex>
    </Flex>
  );
}

export default Login;
