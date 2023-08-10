import React from 'react'

function ReservationList({ reservationsList }) {
  return (
    <div>
      {reservationsList.map((reservation, index) => (
        <div key={index}>
          {/* Display reservation details here */}
          Date: {reservation.date}, Time: {reservation.time}, Number of Diners:
          {reservation.numberOfDiners}, Occasion: {reservation.occasion},
          SeatingOpt: {reservation.seatingOption}
        </div>
      ))}
    </div>
  )
}

export default ReservationList
