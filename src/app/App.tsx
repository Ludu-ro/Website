import React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { Routes } from "../routes/";
import { Topnav, Footer, Assistant } from "../components/constructed";
import "./App.css";

const theme = extendTheme({
  colors: {
    primary: "#5b0792",
    "primary-dark": "#3d0561",
    secondary: "#FFFFFF",
    tertiary: "#E5862A",
    "font-primary": "black",
    "font-secondary": "#FFFFFF",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box color="#000041" className="app">
      <Topnav />
      <Routes />
      <Footer />
      <Assistant />
    </Box>
  </ChakraProvider>
);
