import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import { ChakraProvider } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";
import {GlobalProvider} from './context/GlobalState'


ReactDOM.render(
  <GlobalProvider>
    <ChakraProvider resetCSS = {false}>
      <App />
    </ChakraProvider>
  </GlobalProvider>, document.getElementById('root')
);

