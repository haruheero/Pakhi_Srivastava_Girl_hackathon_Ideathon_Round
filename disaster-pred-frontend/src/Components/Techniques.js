import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import stats from '../Images/stats.svg';

function Techniques() {
  return (
    <>
      <Flex
        alignContent={'center'}
        marginLeft={10}
        marginBlock={100}
        justifyContent="space-evenly"
      >
        <Stack>
          <Heading
            as="h2"
            size="2xl"
            marginBlockEnd={50}
            backgroundColor={'red.100'}
            borderRadius={'100'}
            padding={4}
          >
            Our Techniques
          </Heading>
          <Flex width="100%">
            <Card width={600}>
              <CardBody>
                Flood prediction model can be explained by taking the example of
                a city in Kerala - Kozhikode A heavy rainfall can be defined as
                rainfall greater than 100 mm in 24 hours. If a lot of rainfall
                is received in an area with low elevation such as Kozhikode (1 m
                - 50 m approx) that can potentially lead to flooding if the
                drainage system is not adequate. Rainfall depends on other
                environmental factors such as humidity, max. temperature, dew,
                cloud cover, visibility, sea level pressure, wind direction,
                wind speed to name a few. By taking into account the data of
                previous (7 days) (3 days in implementation) a prediction for
                the rainfall that can occur after 7 days can be made. This can
                give an idea about whether flooding is possible in the region or
                not (if it is greater than a threshold then flooding is
                possible). After the rainfall prediction, by using the data from
                the elevation of different areas of the district, it is possible
                to evaluate which areas are at risk of flooding. Furthermore
                using the socio economic distribution data (population density,
                rural vs urban areas, slums etc.) the impact can be measured on
                that area & hence proper arrangements can be made.
              </CardBody>
            </Card>
          </Flex>
        </Stack>
        <Image src={stats} boxSize="xl" />
      </Flex>
    </>
  );
}

export default Techniques;
