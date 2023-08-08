import {
  ChakraProvider,
  Box,
  Text,
  HStack,
  Image,
  VStack,
} from '@chakra-ui/react'
import Form from './Form'

function Reservation() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="#3F3F3F"
        color="white"
        padding="10px"
      >
        <VStack>
          <Text fontSize={['4xl', '5xl', '6xl', '7xl']} color="#F4CE14">
            Little Lemon
          </Text>
          <Text fontSize={['xl', '2xl', '3xl', '4xl']} marginTop="5px">
            Chikago
          </Text>
          <Text fontSize={['xl', '2xl', '3xl', '4xl']} marginTop="10px">
            Find a table for any occasion
          </Text>
          <HStack spacing={['10px', '20px', '30px', '40px']}>
            <Box
              w={['150px', '200px', '250px', '300px']}
              h={['100px', '120px', '150px', '180px']}
              margin="10px"
            >
              <Image
                borderRadius={20}
                width="100%"
                height="100%"
                src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?cs=srgb&dl=pexels-vincent-ma-janssen-1310777.jpg&fm=jpg"
                alt="Restaurant Picture 1"
              />
            </Box>
            <Box
              w={['150px', '200px', '250px', '300px']}
              h={['100px', '120px', '150px', '180px']}
              margin="10px"
            >
              <Image
                borderRadius={20}
                width="100%"
                height="100%"
                src="https://restaurantandbardesignawards.com/_next/image?url=%2Fimages%2F2022%2Foverall-winner-01.jpg&w=3840&q=75"
                alt="Restaurant Picture 2"
              />
            </Box>
          </HStack>
          <Form className="Form" />
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default Reservation
