import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Heading, Box} from '@chakra-ui/react';
import MApp from './Map/Map';

function Flood() {
    const [weatherData, setWeatherData] = useState('');

    useEffect(() => {
      fetch('/model')
        .then(response => {
          response.json().then(data => {
            setWeatherData(data['danger_zones']);
          });
        })
        .catch(console.error());
    }, []);

  return (
    <>
      <Navbar />
       <Heading
        as="h1"
        margin={10}
        backgroundColor={'blue.100'}
        borderRadius={'100'}
        padding={4}
      >
        Flood Prediction
      </Heading>
      {weatherData &&<Box margin={1} height={100}>
        <MApp data={weatherData}/>
      </Box>
      }
      <Footer />
    </>
  );
}

export default Flood