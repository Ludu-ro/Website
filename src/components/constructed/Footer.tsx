import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function Footer() {
	return (
		<Flex p="4" bg="secondary" alignItems="center">
			<Text flex="1" fontSize="small" fontWeight="bold">
				Copyright © {new Date().getFullYear()}
			</Text>
		</Flex>
	);
}

export default Footer;
