import { Text, Flex, Divider, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../clients";
import { UserActionType, UserContext } from "../../hooks";
import ActionButton from "./ActionButton";
import FormInput from "./FormInput";
import InfoButton from "./InfoButton";
import jwt_decode from "jwt-decode";
import { User } from "../../types";

interface CloseFunction {
  closeMethod: () => void;
}

function LoginBox({ closeMethod = () => {} }: CloseFunction) {
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
      const user: User = {
        id: jwtTokenDecoded["unique_name"],
        firstName: jwtTokenDecoded["nameid"],
        lastName: jwtTokenDecoded["family_name"],
        role: jwtTokenDecoded["role"],
        jwtToken: jwtToken,
      };

      // save information into state context
      dispatch({
        type: UserActionType.SetUser,
        user,
      });
    } catch (error) {
      setErrors({
        username: "Numele de utilizator sau parola sunt gresite",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    closeMethod();
  }, [user]);

  return (
    <Flex
      pt="16"
      alignSelf="center"
      p="10"
      boxShadow="xs"
      rounded="md"
      justifyContent="space-evenly"
      placeItems="center"
      direction="column"
      alignItems="center"
      bg="white"
      color="font-secondary"
    >
      <Text textColor="primary-dark" fontSize="2xl">
        Autentificare
      </Text>

      <Flex
        direction="column"
        placeItems="center"
        gap="2"
        bg="secondary"
        p="4"
        w={["sm", "md"]}
        borderRadius="lg"
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
        />

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
  );
}

export default LoginBox;
