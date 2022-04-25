import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Flex,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { UserContext, UserActionType } from "../../hooks/";
import { ActionButton, FormInput, InfoButton } from "../blocks";
import { login } from "../../clients";
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/login.png";

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
    bg="primary-dark"
    flexDirection="row-reverse"
    p="5"
    justifyContent="center"
    >
    <Flex
      pt="16"
      alignSelf="center"
      p="10"
      boxShadow='xs' rounded='md'
      justifyContent="space-evenly"
      placeItems="center"
      direction="column"
      alignItems="center"
      bg="white"
      color="font-secondary"
      mixBlendMode="hard-light"
    >
      <Text textColor="primary-dark" fontSize="2xl"> Autentificare </Text>

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


    <Flex
      w="max-content"
      placeItems="flex-start"
      direction="column"
      alignItems="center"
    >

    <Image
        w="90%"
        h="90%"
        src={LoginImg}
        alt="login"
      />

    </Flex>

    </Flex>
  );
}

export default Login;
