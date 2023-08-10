export let reservations = []

export function addReservation(newReservation) {
  reservations = [...reservations, newReservation]
}

export function getReservations() {
  return reservations
}

export function updateReservations(newReservation) {
  console.log('Updating reservations...')
  addReservation(newReservation)
}
