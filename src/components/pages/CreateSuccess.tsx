
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../blocks";

function CreateSucces(){

    const navigate = useNavigate();

    return (
        <Flex
        pt="16"
        gap="8"
        placeItems="center"
        direction="column"
        bg="primary-dark"
        color="font-secondary"
        >
            <Flex  
            border="1px"
            bg="whitesmoke"
            placeItems="center"
            textColor="primary-dark"
            margin="5"
            rounded='md'
            p="10"
            direction="column"
            pt="5"
            gap="5"
            justifyContent="space-around">
        <Text color="font-primary" fontSize="3xl" mt="5%">
            Cursul a fost creeat cu success
        </Text>

        <Flex gap="4">
            <ActionButton width="50" onClick={() => window.location.reload()}>
            Adauga un curs nou
            </ActionButton>
        </Flex>

        <Flex gap="4">
            <ActionButton width="50" onClick={() => navigate("/")}>
            Acasa
            </ActionButton>
        </Flex>
        </Flex>
        </Flex>
    );
}

export default CreateSucces;