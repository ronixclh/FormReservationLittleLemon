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
import { augustDates, hoursBetween12To22 } from './Form_data.js'
import { updateReservations } from './Form_reservations.js'

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
  const [reservationsList, setReservationsList] = useState([])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Handling submit...')
    console.log('Form Data:', formData)
    const newReservation = { ...formData }
    updateReservations(newReservation)
    setReservationsList((prevReservations) => [
      ...prevReservations,
      newReservation,
    ])
    setIsSubmitted(true)
  }

  const handleAlertClose = () => {
    setIsSubmitted(false)
    setFormData({ ...initialFormData })
  }

  const submittedFormData = { ...formData }

  const availableDates = augustDates.filter((date) => {
    return !reservationsList.some((reservation) => reservation.date === date)
  })

  const availableTimes = hoursBetween12To22.filter((time) => {
    return !reservationsList.some((reservation) => reservation.time === time)
  })

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
            {availableDates.map((date) => (
              <option key={date}>{date}</option>
            ))}
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
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
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
