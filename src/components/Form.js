import React from 'react'
import {
  FormControl,
  FormLabel,
  ChakraProvider,
  Select,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'

function Form() {
  const initialFormData = {
    date: '',
    time: '',
    numberOfDiners: '',
    occasion: '',
    seatingOption: '',
  }

  const [formData, setFormData] = useState({ ...initialFormData })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const handleAlertClose = () => {
    setIsSubmitted(false)
    setFormData({ ...initialFormData }) // Clear the form data after the alert is closed
  }

  const submittedFormData = { ...formData }

  return (
    <ChakraProvider>
      <VStack
        spacing={['10px', '20px', '30px', '40px']}
        align="stretch"
        border="1px solid white"
        borderRadius={20}
        paddingRight="210px"
        paddingLeft="210px"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Select
            name="date"
            placeholder="Select Date"
            value={formData.date}
            onChange={handleInputChange}
          >
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
          <Select
            name="time"
            placeholder="Select Time"
            value={formData.time}
            onChange={handleInputChange}
          >
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
          <Select
            name="numberOfDiners"
            placeholder="Select Number of Diners"
            value={formData.numberOfDiners}
            onChange={handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Occasion</FormLabel>
          <Select
            name="occasion"
            placeholder="Select Occasion"
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Seating Option</FormLabel>
          <Select
            name="seatingOption"
            placeholder="Select Seating Option"
            value={formData.seatingOption}
            onChange={handleInputChange}
          >
            <option>Standard</option>
            <option>Outside</option>
          </Select>
        </FormControl>

        {isSubmitted && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            mt="20px"
            mx="auto"
            position="fixed"
            top="0"
            left="0"
            right="0"
            width="60%"
            zIndex="1000"
            borderRadius={20}
            border="1px solid white"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg" color="black">
              Congratulations! Reservation submitted!
            </AlertTitle>
            {console.log(formData)}

            <AlertDescription maxWidth="sm" color="black">
              {` ${submittedFormData.seatingOption} table is reserved for
            ${submittedFormData.numberOfDiners} guests on ${submittedFormData.date} ${submittedFormData.time}. Have a great ${submittedFormData.occasion} party!!!`}
            </AlertDescription>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={handleAlertClose}
              color="black"
            />
          </Alert>
        )}
        <Button
          colorScheme="yellow"
          size="lg"
          marginTop="20px"
          type="submit"
          onClick={handleSubmit}
        >
          Let's go
        </Button>
      </VStack>
    </ChakraProvider>
  )
}

export default Form
