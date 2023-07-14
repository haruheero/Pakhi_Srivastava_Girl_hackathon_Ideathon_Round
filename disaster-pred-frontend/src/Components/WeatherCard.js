import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import weatherCard from '../Images/weatherCard.svg'

function WeatherCard({date, maxtemp, mintemp, precip}) {
  return (
    <>
      <Card maxW="sm" marginLeft={10} marginRight={10} marginBlockStart={10}>
        <CardBody>
          <Image src={weatherCard} alt="weathercard" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="sm">
              {date}
            </Heading>
            <Box backgroundColor={'blue.100'} borderRadius={'10'} padding={1}>
              <Heading size="sm" color={'blue.700'}>
                Temperatures
              </Heading>
              <Text color="blue.600" fontSize="2xl">
                {maxtemp} °C, {mintemp} °C
              </Text>
            </Box>
            <Box backgroundColor={'blue.100'} borderRadius={'10'} padding={1}>
              <Heading size="sm" color={'blue.700'}>
                Precipitation
              </Heading>
              <Text color="blue.600" fontSize="2xl">
                {precip}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default WeatherCard