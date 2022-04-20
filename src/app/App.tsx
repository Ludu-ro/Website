import React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { Routes } from "../routes/";
import { Topnav, Footer } from "../components/constructed";
import "./App.css";

const theme = extendTheme({
  colors: {
    primary: "#FF8000",
    "primary-light": "#FFD505",
    secondary: "#321E50",
    "secondary-dark": "#190f29",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box color="#000041" className="app">
      <Topnav />
      <Routes />
      <Footer />
    </Box>
  </ChakraProvider>
);
