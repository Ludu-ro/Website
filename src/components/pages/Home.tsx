import React from 'react';
import { useSocket } from "../../hooks/useSocket"
import { Button, Flex, Text } from '@chakra-ui/react';

function Home() {
	const { isConnected, data, connect, disconnect } = useSocket({});

	return (
		<Flex mt="32" gap="4" placeItems="center" direction="column">
			<Text mt="8" fontSize="3xl" fontWeight="bold">
				Bun venit!
			</Text>
			<Text mt="8" fontSize="3xl" fontWeight="bold">
				isConnected: {isConnected.toString()}
			</Text>
			{isConnected
				? <Button color="white" backgroundColor="primary" onClick={disconnect}>
					Disconnect
				</Button>
				: <Button color="white" backgroundColor="primary" onClick={connect}>
					Connect
				</Button>
			}
			<Text mt="8" fontSize="3xl" fontWeight="bold">
				{data?.message || "no message"}
			</Text>
		</Flex>
	);
}

export default Home;
