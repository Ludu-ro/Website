import React, { useContext } from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
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
import { faPerson, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

function Topnav() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // not logged in
  if (!user) {
    return (
      <Flex color="font-secondary" bg="primary" p="4" alignItems="center">
        <Text ml="2" flex="1" fontSize="xl" fontWeight="bold">
          <Link to="/">Ludu Academy </Link>
        </Text>
        <OnlinePlayers />
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
      <Box display={["none", "block"]}>
        <OnlinePlayers />
      </Box>

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
            onClick={() => navigate("/profile")}
            _focus={{ background: "primary-dark" }}
          >
            Profil
          </MenuItem>
          <MenuItem
            onClick={async () => {
              localStorage.clear();
              window.location.reload();
            }}
            _focus={{ background: "primary-dark" }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Topnav;
