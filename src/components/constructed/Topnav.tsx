import React, { useContext } from "react";
import {
  Badge,
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { OnlinePlayers } from "../blocks";
import { UserContext } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { AssistantContext } from "./assistant/AssistantContext";
import Moustache from "../../assets/Moustache.png";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { Student } from "../../types";

function AssistantIcon() {
  const { messages, setIsClosed, isClosed } = useContext(AssistantContext);
  const { user } = useContext(UserContext);

  if (!isClosed) {
    return <React.Fragment />;
  }

  return (
    <Box position="relative">
      <Flex
        borderRadius="100%"
        w="4"
        h="4"
        bg="tertiary"
        zIndex="1"
        left="0"
        top="0"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        {messages.length}
      </Flex>
      <IconButton
        aria-label="assistant button"
        bg="primary-dark"
        icon={<Image w="8" src={Moustache} />}
        onClick={() => setIsClosed(false)}
      />
    </Box>
  );
}

function Topnav() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // not logged in
  if (!user) {
    return (
      <Flex
        gap="4"
        color="font-secondary"
        bg="primary"
        p="4"
        alignItems="center"
      >
        <Text ml="2" flex="1" fontSize="xl" fontWeight="bold">
          <Link to="/">Ludu Academy </Link>
        </Text>
        <AssistantIcon />
        {/* <OnlinePlayers /> */}
      </Flex>
    );
  }

  // logged in
  return (
    <Flex gap="4" color="font-secondary" bg="primary" p="4" alignItems="center">
      {/* LOGO */}
      <Text ml="2" fontSize="xl" fontWeight="bold" display={["none", "block"]}>
        <Link to="/">Ludu Academy </Link>
      </Text>

      {/* Search component */}
      <InputGroup flex="1">
        <InputLeftElement
          pointerEvents="none"
          children={<FontAwesomeIcon color="gray" icon={faSearch} />}
        />
        <Input color="black" bg="white" type="tel" placeholder="Cauta" />
      </InputGroup>

      {/* Online players */}
      {/* <Box display={["none", "block"]}>
        <OnlinePlayers />
      </Box> */}

      <Box display={["none", "block"]}>
        <OnlinePlayers />
      </Box>

      <Flex direction="column" gap="1">
        {/* Gold */}
        {user.role == "student" && (
          <Badge color="secondary" bg="primary-dark" borderRadius="lg">
            {(user as Student).xp || 0}
            <Icon ml="2">
              <FontAwesomeIcon icon={faCoins} />
            </Icon>
          </Badge>
        )}

        {/* Xp */}
        {user.role == "student" && (
          <Badge color="secondary" bg="primary-dark" borderRadius="lg">
            {(user as Student).xp || 0} xp
          </Badge>
        )}
      </Flex>

      <AssistantIcon />

      {/* Profile */}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FontAwesomeIcon icon={faUser} />}
          bg="primary-dark"
        />
        <MenuList bg="primary">
          <MenuItem
            justifyContent="start"
            alignContent="flex-start"
            flexDirection="row"
            onClick={() => navigate("/profile")}
            _focus={{ background: "primary-dark" }}
            borderBottomColor="white"
            borderBottomWidth="1px"
          >
            <Icon marginRight="2" as={CgProfile}></Icon>
            Profil
          </MenuItem>
          <MenuItem
            onClick={async () => {
              localStorage.clear();
              window.location.replace("/");
            }}
            _focus={{ background: "primary-dark" }}
          >
            <Icon marginRight="2" as={BiLogOut}></Icon>
            Iesi din cont
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Topnav;
