import React from 'react'
import {
  FormControl,
  FormLabel,
  ChakraProvider,
  Select,
  Button,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { augustDates, hoursBetween12To22 } from './Form_data.js'
import { updateReservations } from './Form_reservations.js'
import ReservationList from './ReservationList'
import { useMemo } from 'react'

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

  const [isDateIncomplete, setIsDateIncomplete] = useState(false)
  const [isTimeIncomplete, setIsTimeIncomplete] = useState(false)
  const [isNumberOfDinersIncomplete, setIsNumberOfDinersIncomplete] =
    useState(false)
  const [isOccasionIncomplete, setIsOccasionIncomplete] = useState(false)
  const [isSeatingOptionIncomplete, setIsSeatingOptionIncomplete] =
    useState(false)

  const isFormComplete = useMemo(
    () =>
      !(
        isDateIncomplete ||
        isTimeIncomplete ||
        isNumberOfDinersIncomplete ||
        isOccasionIncomplete ||
        isSeatingOptionIncomplete
      ),
    [
      isDateIncomplete,
      isTimeIncomplete,
      isNumberOfDinersIncomplete,
      isOccasionIncomplete,
      isSeatingOptionIncomplete,
    ]
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setIsDateIncomplete(false)
    setIsTimeIncomplete(false)
    setIsNumberOfDinersIncomplete(false)
    setIsOccasionIncomplete(false)
    setIsSeatingOptionIncomplete(false)

    if (
      formData.date === '' ||
      formData.time === '' ||
      formData.numberOfDiners === '' ||
      formData.occasion === '' ||
      formData.seatingOption === ''
    ) {
      setIsDateIncomplete(formData.date === '')
      setIsTimeIncomplete(formData.time === '')
      setIsNumberOfDinersIncomplete(formData.numberOfDiners === '')
      setIsOccasionIncomplete(formData.occasion === '')
      setIsSeatingOptionIncomplete(formData.seatingOption === '')
      return
    }

    console.log('Handling submit...')
    console.log('Form Data:', formData)

    const newReservation = { ...formData }
    updateReservations(JSON.stringify(newReservation))

    setReservationsList((prevReservations) => [
      ...prevReservations,
      newReservation,
    ])

    setFormData({ ...initialFormData })
    setIsSubmitted(true)
  }

  const handleAlertClose = () => {
    setIsSubmitted(false)
    setFormData({ ...initialFormData })
  }

  const submittedReservation = {
    ...reservationsList[reservationsList.length - 1],
  }

  const availableDates = augustDates.filter((date) => {
    return (
      !reservationsList.some(
        (reservation) =>
          reservation.date === date && reservation.time === formData.time
      ) || date === formData.date
    )
  })

  const availableTimes = hoursBetween12To22.filter((time) => {
    return (
      !reservationsList.some(
        (reservation) =>
          reservation.date === formData.date && reservation.time === time
      ) ||
      (formData.date === formData.date && time === formData.time)
    )
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
          {isDateIncomplete && (
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select a date.
            </Alert>
          )}
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
          {isTimeIncomplete && (
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select a time.
            </Alert>
          )}
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
          {isNumberOfDinersIncomplete && (
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select the number of diners.
            </Alert>
          )}
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
          {isOccasionIncomplete && (
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select an occasion.
            </Alert>
          )}
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
          {isSeatingOptionIncomplete && (
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select a seating option.
            </Alert>
          )}
        </FormControl>

        <Button
          colorScheme="yellow"
          size="lg"
          marginTop="20px"
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormComplete}
        >
          Let's go
        </Button>
      </VStack>
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
          <AlertDescription maxWidth="sm" color="black">
            {`${submittedReservation.seatingOption} table is reserved for
    ${submittedReservation.numberOfDiners} guests on ${submittedReservation.date} ${submittedReservation.time}. Have a great ${submittedReservation.occasion} party!!!`}
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
        <Text fontSize="4xl">Current reservations:</Text>
        <ReservationList reservationsList={reservationsList} />
      </VStack>
    </ChakraProvider>
  )
}

export default Form
