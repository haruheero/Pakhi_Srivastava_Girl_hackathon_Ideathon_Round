import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Offer from './Components/Offer';
import Rainfall from './Components/Rainfall';
import Flood from './Components/Flood';
import Alert from './Components/Alert';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/#offer" element={<Offer />} />
          <Route path="/rainfall" element={<Rainfall />} />
          <Route path="/flood" element={<Flood />} />
          <Route path="/alert" element={<Alert />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
