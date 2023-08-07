import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
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
        marginRight="400px"
        marginLeft="400px"
        padding="20px"
      >
        <div>
          <Text fontSize="6xl" color="#F4CE14">
            Little Lemon
          </Text>
          <Text fontSize="4xl">Chikago</Text>
          <Text fontSize="4xl" marginTop="60px">
            Find a table for any occasion
          </Text>

          <HStack spacing="10px">
            <Box w="200px" h="80px" margin="10px">
              <Image
                width="200px"
                height="150px"
                src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?cs=srgb&dl=pexels-vincent-ma-janssen-1310777.jpg&fm=jpg"
                alt="Restaurant Picture 1"
              />
            </Box>
            <Box w="200px" h="80px" margin="10px">
              <Image
                width="200px"
                height="150px"
                src="https://restaurantandbardesignawards.com/_next/image?url=%2Fimages%2F2022%2Foverall-winner-01.jpg&w=3840&q=75"
                alt="Restaurant Picture 2"
              />
            </Box>
          </HStack>
          <Form className="Form" />
        </div>
      </Box>
    </ChakraProvider>
  )
}

export default Reservation
