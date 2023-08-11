import React from 'react'

function ReservationList({ reservationsList }) {
  return (
    <div>
      {reservationsList.map((reservation, index) => (
        <div
          key={index}
          s
          style={{
            marginBottom: '20px',
            border: '1px solid white',
            borderRadius: '20px',
          }}
        >
          <div>Date: {reservation.date}</div>
          <div>Time: {reservation.time}</div>
          <div>Number of Diners: {reservation.numberOfDiners}</div>
          <div>Occasion: {reservation.occasion}</div>
          <div>Seating Options: {reservation.seatingOption}</div>
        </div>
      ))}
    </div>
  )
}

export default ReservationList
