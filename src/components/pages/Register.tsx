import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Flex,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { ActionButton, DualFormInput, FormInput, InfoButton } from "../blocks";
import { useNavigate } from "react-router-dom";
import { register } from "../../clients";
import { UserActionType, UserContext } from "../../hooks";
import RegisterImg from "../../assets/register.png";

function Register() {
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const errors: any = {};
    if (!lastName) {
      errors.lastName = "Camp obligatoriu";
    }
    if (!firstName) {
      errors.firstName = "Camp obligatoriu";
    }
    if (!username) {
      errors.username = "Numele de utlizator este obligatoriu";
    }
    if (!email) {
      errors.email = "Adresa de email este obligatoriu";
    }
    if (!password) {
      errors.password = "Parola este obligatorie";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirmati parola";
    }
    if (password && password !== confirmPassword) {
      errors.password = "Parolele nu se potrivesc";
      errors.confirmPassword = "Parolele nu se potrivesc";
    }
    return errors;
  };

  const handleRegister = async () => {
    const errors = validate();
    setErrors(errors);
    // if validation did not pass return
    if (Object.keys(errors).length > 0) return;

    // todo add error banner for server
    // todo add loading
    const user = await register(
      {
        username,
        password,
        firstName,
        lastName,
        email,
      },
      "student"
    );
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
    bg="primary-dark"
    flexDirection="row-reverse"
    p="3"
    justifyContent="center"
    >
      <Flex
      w="max-content"
      placeItems="flex-start"
      flexDirection="column"
      alignItems="center"
      flex-direction= "column-reverse"
    >

    <Image
        w="90%"
        h="500"
        src={RegisterImg}
        alt="login"
      />

    </Flex>

    <Flex
      pt="10"
      alignSelf="center"
      p="5"
      boxShadow='xs' 
      rounded='md'
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
        p="2"
        w={["sm", "md"]}
        borderRadius="lg"
      >
        <DualFormInput
          label="Numele tau complet:"
          placeholder={["Nume de familie", "Prenume"]}
          state={[lastName, firstName]}
          setter={[setLastName, setFirstName]}
          error={[errors.lastName, errors.firstName]}
          color="font-primary"
        />
        <FormInput
          placeholder="Username"
          label="Nume de utilizator:"
          state={username}
          setter={setUsername}
          error={errors.username}
          color="font-primary"
        />
        <FormInput
          placeholder="Email"
          label="Adresa ta de email:"
          state={email}
          setter={setEmail}
          error={errors.email}
          color="font-primary"
        />
        <FormInput
          placeholder="Parola"
          label="Parola:"
          state={password}
          setter={setPassword}
          error={errors.password}
          type={"password"}
          color="font-primary"
        />
        <FormInput
          placeholder="Rescrie parola"
          label="Confirma parola:"
          state={confirmPassword}
          setter={setConfirmPassword}
          error={errors.confirmPassword}
          type={"password"}
          color="font-primary"
        />
        <Box />

        <ActionButton width="100%" onClick={handleRegister}>
          Inregistreaza-te
        </ActionButton>

        <Flex color="font-primary" gap="4" w="100%" alignItems="center">
          <Divider />
          sau
          <Divider />
        </Flex>

        <InfoButton width="100%" onClick={() => navigate("/login")}>
          Autentificare
        </InfoButton>
      </Flex>
    </Flex>
    </Flex>
  );
}

export default Register;
