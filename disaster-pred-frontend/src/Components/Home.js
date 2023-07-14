import React from 'react' 
import Navbar from './Navbar';
import { Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import flood from '../Images/flood.svg'
import Footer from './Footer';
import Offer from './Offer';
import Techniques from './Techniques';

function Home() {
  return (
    <>
      <Navbar />
      <Flex
        height={'100vh'}
        alignContent={'center'}
        justifyContent={'center'}
        bgGradient="linear(to-r, blue.100, green.100)"
      >
        <Flex alignContent={'center'} justifyContent={'center'} margin={'100'}>
          <Stack>
            <Heading as="h1" size="4xl" >
              Flood Prediction
            </Heading>
            <Card maxWidth={560} marginTop={100}>
              <CardBody>
                <Text>
                  Floods are the most frequent type of natural disaster and
                  occur when an overflow of water submerges land that is usually
                  dry. Floods are often caused by heavy rainfall, rapid snowmelt
                  or a storm surge from a tropical cyclone or tsunami in coastal
                  areas. Floods can cause widespread devastation, resulting in
                  loss of life and damages to personal property and critical
                  public health infrastructure. Between 1998-2017, floods
                  affected more than 2 billion people worldwide. People who live
                  in floodplains or non-resistant buildings, or lack warning
                  systems and awareness of flooding hazard, are most vulnerable
                  to floods.
                </Text>
              </CardBody>
            </Card>
          </Stack>
        </Flex>
        <Flex
          boxSize="medium"
          alignContent={'center'}
          justifyContent={'center'}
          margin={'50'}
        >
          <Image src={flood} alt="Dan Abramov" />
        </Flex>
      </Flex>
      <Offer/>
      <Techniques/>
      <Footer/>
    </>
  );
}

export default Home