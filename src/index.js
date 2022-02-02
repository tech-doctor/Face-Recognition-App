import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { ChakraProvider } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
    <ChakraProvider resetCSS = {false}>
      <App />
    </ChakraProvider>
     , document.getElementById('root')
);

