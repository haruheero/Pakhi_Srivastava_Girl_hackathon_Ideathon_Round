import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Flex, Heading } from '@chakra-ui/react';
import WeatherCard from './WeatherCard';
import LineChart from './LineChart';
import Chart from 'chart.js/auto';
import Footer from './Footer'

function Rainfall() {
const [weatherData, setWeatherData] = useState('');

useEffect(() => {
    fetch('/model')
    .then(response => {
        response.json().then(data => {
            setWeatherData(data)
        })
    })
    .catch(console.error())
}, [])

const labelsprecip = weatherData? [weatherData['day1']['date'], weatherData['day2']['date'], weatherData['day3']['date'], 'predicted'] : ['day1', 'day2', 'day3', 'day4'];
const labels = weatherData
  ? [
      weatherData['day1']['date'],
      weatherData['day2']['date'],
      weatherData['day3']['date'],
    ]
  : ['day1', 'day2', 'day3', 'day4'];

const defaultData = {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 230, 100)',
          borderColor: 'rgb(255, 230, 100)',
          data: [1, 2, 3],
        }

const precipdata = weatherData
  ? {
      labels: labelsprecip,
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [
            weatherData['day1']['precip'],
            weatherData['day2']['precip'],
            weatherData['day3']['precip'],
            weatherData['precip_pred'],
          ],
        },
      ],
    }
  : {
      labels: labels,
      datasets: [ defaultData ],
    };
const humiditydata = weatherData
  ? {
      labels: labels,
      datasets: [
        {
          label: 'Humidity',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [
            weatherData['day1']['humidity'],
            weatherData['day2']['humidity'],
            weatherData['day3']['humidity'],
          ],
        },
      ],
    }
  : {
      labels: labels,
      datasets: [ defaultData ],
    };
const sealeveldata = weatherData
  ? {
      labels: labels,
      datasets: [
        {
          label: 'Sealevel Pressure',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [
            weatherData['day1']['sealevelpressure'],
            weatherData['day2']['sealevelpressure'],
            weatherData['day3']['sealevelpressure'],
          ],
        },
      ],
    }
  : {
      labels: labels,
      datasets: [ defaultData ],
    };
const dewdata = weatherData
  ? {
      labels: labels,
      datasets: [
        {
          label: 'Dew',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [
            weatherData['day1']['dew'],
            weatherData['day2']['dew'],
            weatherData['day3']['dew'],
          ],
        },
      ],
    }
  : {
      labels: labels,
      datasets: [ defaultData ],
    };
    const cloudcoverdata = weatherData
      ? {
          labels: labels,
          datasets: [
            {
              label: 'Cloudcover',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [
                weatherData['day1']['cloudcover'],
                weatherData['day2']['cloudcover'],
                weatherData['day3']['cloudcover'],
              ],
            },
          ],
        }
      : {
          labels: labels,
          datasets: [defaultData],
        };

  return (
    <>
      <Navbar />

      {weatherData && (
        <Box>
          <Heading
            as="h1"
            margin={10}
            backgroundColor={'blue.100'}
            borderRadius={'100'}
            padding={4}
          >
            Temperatures
          </Heading>

          <Flex alignItems={'center'} justifyContent={'center'}>
            <WeatherCard
              date={weatherData['day1']['date']}
              maxtemp={weatherData['day1']['maxtemp']}
              mintemp={weatherData['day1']['mintemp']}
              precip={weatherData['day1']['precip']}
            />
            <WeatherCard
              date={weatherData['day2']['date']}
              maxtemp={weatherData['day2']['maxtemp']}
              mintemp={weatherData['day2']['mintemp']}
              precip={weatherData['day2']['precip']}
            />
            <WeatherCard
              date={weatherData['day3']['date']}
              maxtemp={weatherData['day3']['maxtemp']}
              mintemp={weatherData['day3']['mintemp']}
              precip={weatherData['day3']['precip']}
            />
          </Flex>
          <Heading
            as="h1"
            margin={10}
            backgroundColor={'blue.100'}
            borderRadius={'100'}
            padding={4}
          >
            Predicted rainfall
          </Heading>
          <Flex alignItems={'center'} justifyContent={'center'} width={'100vw'}>
            <Box boxSize={600}>
              <LineChart chartData={precipdata} />
            </Box>
          </Flex>
          <Heading
            as="h1"
            margin={10}
            backgroundColor={'blue.100'}
            borderRadius={'100'}
            padding={4}
          >
            Humidity trends
          </Heading>
          <Flex alignItems={'center'} justifyContent={'center'} width={'100vw'}>
            <Box boxSize={600}>
              <LineChart chartData={humiditydata} />
            </Box>
          </Flex>
          <Heading
            as="h1"
            margin={10}
            backgroundColor={'blue.100'}
            borderRadius={'100'}
            padding={4}
          >
            Sea level pressure trends
          </Heading>
          <Flex alignItems={'center'} justifyContent={'center'} width={'100vw'}>
            <Box boxSize={600}>
              <LineChart chartData={sealeveldata} />
            </Box>
          </Flex>
          <Heading
            as="h1"
            margin={10}
            backgroundColor={'blue.100'}
            borderRadius={'100'}
            padding={4}
          >
            Dew trends
          </Heading>
          <Flex alignItems={'center'} justifyContent={'center'} width={'100vw'}>
            <Box boxSize={600}>
              <LineChart chartData={dewdata} />
            </Box>
          </Flex>
          <Heading
            as="h1"
            margin={10}
            backgroundColor={'blue.100'}
            borderRadius={'100'}
            padding={4}
          >
            Cloud Cover trends
          </Heading>
          <Flex alignItems={'center'} justifyContent={'center'} width={'100vw'}>
            <Box boxSize={600}>
              <LineChart chartData={cloudcoverdata} />
            </Box>
          </Flex>
        </Box>
      )}
      <Footer />

    </>
  );
}

export default Rainfall