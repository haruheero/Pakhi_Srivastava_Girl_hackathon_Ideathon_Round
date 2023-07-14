import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Heading, Box, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

function Alert() {
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    fetch("/model")
      .then((response) => {
        response.json().then((data) => {
          setWeatherData(data["danger_zones"]);
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
        backgroundColor={"blue.100"}
        borderRadius={"100"}
        padding={4}
      >
        Alert in areas
      </Heading>
      {weatherData && (
        <Box margin="auto" width={1000}>
          <TableContainer>
            <Table variant="striped" colorScheme="teal" alignItems={"center"}>
              <TableCaption>Flood Alert in Areas (Kozhikode)</TableCaption>
              <Thead>
                <Tr>
                  <Th alignItems={"center"}>Area</Th>
                  <Th
                    isNumeric
                    alignContent={"center"}
                    justifyContent={"center"}
                  >
                    Population Density
                  </Th>
                </Tr>
              </Thead>
              <Tbody alignItems={"center"}>
                {weatherData.map((area) => (
                  <Tr alignContent={"center"}>
                    <Td alignContent={"center"}>{area[0]}</Td>
                    <Td alignContent={"center"} justifyContent={"center"}>
                      {area[1]}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <Footer />
    </>
  );
}

export default Alert;
