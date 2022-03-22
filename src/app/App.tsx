import React from 'react';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { Routes } from '../routes/';
import { Topnav, Footer } from '../components/constructed';
import './App.css';

const theme = extendTheme({
	colors: {
		'primary-light': '#9193E1',
		primary: '#4145CB',
		'primary-dark': '#242682',
		'secondary-light': '#91E1CE',
		secondary: '#41CBAB',
		'secondary-dark': '#24826C',
		tertiary: '#CB7441'
	}
});

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box bg="white" className="app">
			<Topnav />
			<Routes />
			<Footer />
		</Box>
	</ChakraProvider>
);
