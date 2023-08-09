import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Form from './Form'

test('Form data is cleared after alert close', async () => {
  const { getByText, getByLabelText, queryByText } = render(<Form />)

  // Fill in the form fields
  fireEvent.change(getByLabelText('Date'), { target: { value: '2023-08-07' } })
  fireEvent.change(getByLabelText('Time'), { target: { value: '18:00' } })
  fireEvent.change(getByLabelText('Number of Diners'), {
    target: { value: '2' },
  })
  fireEvent.change(getByLabelText('Occasion'), {
    target: { value: 'Birthday' },
  })
  fireEvent.change(getByLabelText('Seating Option'), {
    target: { value: 'Outside' },
  })

  // Click the submission button
  fireEvent.click(getByText("Let's go"))

  // Wait for the success alert to appear
  await waitFor(() => {
    expect(
      getByText('Congratulations! Reservation submitted!')
    ).toBeInTheDocument()
  })

  // Close the alert
  fireEvent.click(getByText('Close'))

  // Check if the form data is cleared
  expect(
    queryByText('Congratulations! Reservation submitted!')
  ).not.toBeInTheDocument()
  expect(getByLabelText('Date')).toHaveValue('')
  expect(getByLabelText('Time')).toHaveValue('')
  expect(getByLabelText('Number of Diners')).toHaveValue('')
  expect(getByLabelText('Occasion')).toHaveValue('')
  expect(getByLabelText('Seating Option')).toHaveValue('')
})
