import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'

function Form() {
  return (
    <ChakraProvider>
      <div>
        <FormControl marginTop="100px">
          <FormLabel>Date</FormLabel>
          <Select placeholder="Select Date">
            <option>2023-08-07</option>
            <option>2023-08-08</option>
            <option>2023-08-09</option>
            <option>2023-08-10</option>
            <option>2023-08-11</option>
            <option>2023-08-12</option>
          </Select>

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

          <FormLabel>Number of Diners</FormLabel>
          <Select placeholder="Select Number of Diners">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>

          <FormLabel>Occasion</FormLabel>
          <Select placeholder="Select Occasion">
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </Select>
        </FormControl>

        <FormControl as="fieldset" marginTop="10px">
          <FormLabel as="seating">Seating Options </FormLabel>
          <RadioGroup defaultValue="Standart">
            <HStack spacing="24px">
              <Radio value="Standart">Standart</Radio>
              <Radio value="Outside">Outside</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <Button colorScheme="yellow" size="lg" marginTop="20px">
          Let's go
        </Button>
      </div>
    </ChakraProvider>
  )
}

export default Form
