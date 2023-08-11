import React from 'react'
import {
  // Import Chakra UI components and hooks
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
import { augustDates, hoursBetween12To22 } from './components/Form_data.js'
import { updateReservations } from './components/Form_reservations.js'
import ReservationList from './components/ReservationList.js'
import { useMemo } from 'react'

function Form() {
  // Define initial form data structure
  const initialFormData = {
    date: '',
    time: '',
    numberOfDiners: '',
    occasion: '',
    seatingOption: '',
  }

  // State for tracking form data
  const [formData, setFormData] = useState({ ...initialFormData })

  // State for tracking whether the form is submitted
  const [isSubmitted, setIsSubmitted] = useState(false)

  // State for tracking list of reservations
  const [reservationsList, setReservationsList] = useState([])

  // State variables for tracking incomplete form fields
  const [isDateIncomplete, setIsDateIncomplete] = useState(false)
  const [isTimeIncomplete, setIsTimeIncomplete] = useState(false)
  const [isNumberOfDinersIncomplete, setIsNumberOfDinersIncomplete] =
    useState(false)
  const [isOccasionIncomplete, setIsOccasionIncomplete] = useState(false)
  const [isSeatingOptionIncomplete, setIsSeatingOptionIncomplete] =
    useState(false)

  // Memoized value indicating whether the form is complete
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

  // Handler for input changes in the form fields
  const handleInputChange = (event) => {
    // Extract name and value from the input element
    const { name, value } = event.target
    // Update form data using the previous data and the changed field
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault()

    // Reset incomplete field indicators
    setIsDateIncomplete(false)
    setIsTimeIncomplete(false)
    setIsNumberOfDinersIncomplete(false)
    setIsOccasionIncomplete(false)
    setIsSeatingOptionIncomplete(false)

    // Check for incomplete fields and display alerts
    if (
      formData.date === '' ||
      formData.time === '' ||
      formData.numberOfDiners === '' ||
      formData.occasion === '' ||
      formData.seatingOption === ''
    ) {
      // Set incomplete indicators based on specific fields
      setIsDateIncomplete(formData.date === '')
      setIsTimeIncomplete(formData.time === '')
      setIsNumberOfDinersIncomplete(formData.numberOfDiners === '')
      setIsOccasionIncomplete(formData.occasion === '')
      setIsSeatingOptionIncomplete(formData.seatingOption === '')
      return
    }

    // Log form data and update reservations
    console.log('Handling submit...')
    console.log('Form Data:', formData)
    // Create a new reservation object from the form data
    const newReservation = { ...formData }
    // Update the reservations list with the new reservation
    updateReservations(JSON.stringify(newReservation))
    setReservationsList((prevReservations) => [
      ...prevReservations,
      newReservation,
    ])

    // Reset form data and set submission state
    setFormData({ ...initialFormData })
    setIsSubmitted(true)
  }

  // Handler for closing the submission alert
  const handleAlertClose = () => {
    setIsSubmitted(false)
    setFormData({ ...initialFormData })
  }

  // Get the latest submitted reservation for the alert
  const submittedReservation = {
    ...reservationsList[reservationsList.length - 1],
  }

  // Filter available dates based on reservations
  const availableDates = augustDates.filter((date) => {
    return (
      // Check if a date is available for the selected time or matches the form date
      !reservationsList.some(
        (reservation) =>
          reservation.date === date && reservation.time === formData.time
      ) || date === formData.date
    )
  })

  // Filter available times based on reservations
  const availableTimes = hoursBetween12To22.filter((time) => {
    return (
      // Check if a time is available for the selected date and time or matches the form time
      !reservationsList.some(
        (reservation) =>
          reservation.date === formData.date && reservation.time === time
      ) ||
      (formData.date === formData.date && time === formData.time)
    )
  })

  return (
    <ChakraProvider>
      {/* Main form container */}
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
        {/* Form control for selecting the date */}
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Select
            name="date"
            placeholder="Select Date"
            value={formData.date}
            onChange={handleInputChange}
          >
            {/* Render available dates */}
            {availableDates.map((date) => (
              <option key={date}>{date}</option>
            ))}
          </Select>
          {isDateIncomplete && (
            // Display an alert if the date is incomplete
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select a date.
            </Alert>
          )}
        </FormControl>

        {/* Form control for selecting the time */}
        <FormControl>
          <FormLabel>Time</FormLabel>
          <Select
            name="time"
            placeholder="Select Time"
            value={formData.time}
            onChange={handleInputChange}
          >
            {/* Render available times */}
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Select>
          {isTimeIncomplete && (
            // Display an alert if the time is incomplete
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select a time.
            </Alert>
          )}
        </FormControl>

        {/* Form control for selecting the number of diners */}
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
            // Display an alert if the number of diners is incomplete
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select the number of diners.
            </Alert>
          )}
        </FormControl>

        {/* Form control for selecting the occasion */}
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
            // Display an alert if the occasion is incomplete
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select an occasion.
            </Alert>
          )}
        </FormControl>

        {/* Form control for selecting the seating option */}
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
            // Display an alert if the seating option is incomplete
            <Alert status="error" mt={1} borderRadius={20} color="black">
              <AlertIcon />
              Please select a seating option.
            </Alert>
          )}
        </FormControl>

        {/* Submit button */}
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

      {/* Submission success alert */}
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
          {/* Display submitted reservation details */}
          <AlertDescription maxWidth="sm" color="black">
            {`${submittedReservation.seatingOption} table is reserved for
    ${submittedReservation.numberOfDiners} guests on ${submittedReservation.date} ${submittedReservation.time}. Have a great ${submittedReservation.occasion} party!!!`}
          </AlertDescription>
          {/* Close button for the success alert */}
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={handleAlertClose}
            color="black"
          />
        </Alert>
      )}

      {/* List of current reservations */}
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
        {/* Render the list of reservations */}
        <ReservationList reservationsList={reservationsList} />
      </VStack>
    </ChakraProvider>
  )
}

export default Form
