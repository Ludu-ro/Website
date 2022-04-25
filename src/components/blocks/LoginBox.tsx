import {Text, Flex, Divider } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../clients";
import { UserActionType, UserContext } from "../../hooks";
import ActionButton from "./ActionButton";
import FormInput from "./FormInput";
import InfoButton from "./InfoButton";

function LoginBox() {
  
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

  useEffect(() => {
    if (!user) return;
    navigate("/");
  }, [user]);
  
    return (
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
    )
  }

export default LoginBox;