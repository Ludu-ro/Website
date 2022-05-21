import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Flex,
  Text,
  Divider,
  Box,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { UserContext, UserActionType } from "../../hooks/";
import { ActionButton, FormInput, InfoButton } from "../blocks";
import { login } from "../../clients";
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/login.png";
import jwt_decode from "jwt-decode";
import { User } from "../../types";
import HomeLogged from "./HomeLogged";
import { getDetails, addAchievement } from "../../clients";
import Achievement from "../blocks/Achievement";

function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errors: any = {};
    if (!username) {
      errors.username = "Camp obligatoriu";
    }
    if (!password) {
      errors.password = "Parola este obligatorie";
    }
    return errors;
  };

  const handleLogin = async () => {
    const errors = validate();
    setErrors(errors);
    // if validation did not pass return
    if (Object.keys(errors).length > 0) return;

    try {
      // get token from login
      setIsLoading(true);
      const jwtToken = await login({ username, password });
      localStorage.setItem("jwt", jwtToken);

      // decode information
      const jwtTokenDecoded: any = jwt_decode(jwtToken);
      const u: User = {
        id: jwtTokenDecoded["unique_name"],
        firstName: jwtTokenDecoded["nameid"],
        lastName: jwtTokenDecoded["family_name"],
        role: jwtTokenDecoded["role"],
        jwtToken: jwtToken,
      };

      getDetails(u.id, u.role).then((user) => {
        user.role = u.role;
        dispatch({
          type: UserActionType.SetUser,
          user,
        });
      });

      addAchievement(u.id, "NewUser").then(() => {
        toast({ ...Achievement({ type: "NewUser" }) });
      });
    } catch (error) {
      setErrors({
        username: "Numele de utilizator sau parola sunt gresite",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // redirect on successful login
  useEffect(() => {
    if (!user) return;
    navigate("/");
  }, [user]);

  return (
    <Flex
      direction={["column-reverse", "row"]}
      bg="primary-dark"
      justifyContent={["space-around", "center"]}
      alignItems="center"
    >
      <Box w="50%">
        <Image src={LoginImg} alt="login" />
      </Box>

      <Flex
        p="10"
        rounded="md"
        direction="column"
        alignItems="center"
        bg="white"
        color="font-secondary"
        w={["100%", "40%"]}
      >
        <Text textColor="primary-dark" fontSize="2xl">
          Intra in cont
        </Text>

        <Flex
          direction="column"
          placeItems="center"
          gap="2"
          bg="secondary"
          p="4"
          borderRadius="lg"
          w="100%"
        >
          {isLoading && <Spinner color="tertiary" />}

          <FormInput
            label="Numele de utilizator:"
            placeholder="Username"
            state={username}
            setter={setUsername}
            error={errors.username}
            color="font-primary"
          />
          <FormInput
            label="Parola:"
            placeholder="Parola"
            state={password}
            setter={setPassword}
            error={errors.password}
            color="font-primary"
            type="password"
          />

          <Box />

          <ActionButton width="100%" onClick={handleLogin}>
            Autentificare
            {isLoading && <Spinner ml="4" color="secondary" size="sm" />}
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
    </Flex>
  );
}

export default Login;
