import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Topnav() {
	return (
		<Flex p="4" bg="secondary" alignItems="center">
			<Text ml="2" flex="1" fontSize="xl" fontWeight="bold">
				<Link to="/">Lorem ipsum</Link>
			</Text>
		</Flex>
	);
}

export default Topnav;
