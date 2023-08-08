import React from 'react'
import {
  FormControl,
  FormLabel,
  ChakraProvider,
  Select,
  Button,
  Radio,
  RadioGroup,
  HStack,
  VStack,
} from '@chakra-ui/react'

function Form() {
  return (
    <ChakraProvider>
      <VStack spacing={['10px', '20px', '30px', '40px']} align="stretch">
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Select placeholder="Select Date">
            <option>2023-08-07</option>
            <option>2023-08-08</option>
            <option>2023-08-09</option>
            <option>2023-08-10</option>
            <option>2023-08-11</option>
            <option>2023-08-12</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Time</FormLabel>
          <Select placeholder="Select Time">
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            <option>23:00</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Number of Diners</FormLabel>
          <Select placeholder="Select Number of Diners">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Occasion</FormLabel>
          <Select placeholder="Select Occasion">
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </Select>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend">Seating Options</FormLabel>
          <RadioGroup defaultValue="Standart">
            <HStack spacing={['20px', '30px', '40px', '50px']}>
              <Radio value="Standart">Standart</Radio>
              <Radio value="Outside">Outside</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <Button colorScheme="yellow" size="lg" marginTop="20px">
          Let's go
        </Button>
      </VStack>
    </ChakraProvider>
  )
}

export default Form
