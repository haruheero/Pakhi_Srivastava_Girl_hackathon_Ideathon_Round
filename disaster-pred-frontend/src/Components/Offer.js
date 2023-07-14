import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import alert from '../Images/alert.svg'

function Offer() {
  return (
    <>
      <Flex alignContent={'center'} marginLeft={10} marginBlock={100} justifyContent='space-evenly'>
        <Image src={alert} boxSize='md'/>
        <Stack>
          <Heading as="h2" size="2xl" marginBlockEnd={50} backgroundColor={'blue.100'} borderRadius={'100'} padding={4}>
            What we Offer?
          </Heading>
          <Flex width="100%">
            <Card width={600}>
              <CardHeader>
                <Heading>Flood prediction System</Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="sm" textTransform="uppercase">
                      Rainfall prediction
                    </Heading>
                    <Text pt="10" fontSize="sm">
                      Accurate prediction of rainfall by taking into account the
                      data for 3 days
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="sm" textTransform="uppercase">
                      Flood Prediction
                    </Heading>
                    <Text pt="10" fontSize="sm">
                      Based on the rainfall prediction done, get to know what
                      areas are at the risk of flooding
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="sm" textTransform="uppercase">
                      Danger Analysis & alert system
                    </Heading>
                    <Text pt="10" fontSize="sm">
                      All the areas at the risk of flooding based on elevation,
                      and other features are highlighted
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}

export default Offer