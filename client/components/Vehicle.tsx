import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/vehicles/'

export function Vehicle() {
  const [vehicle, setVehicle] = useState<any>()
  const params = Number(useParams().id)

  async function getVehicle(swURL: string, id: number) {
    try {
      const res = await request.get(`${swURL}${id}`)
      setVehicle(res.body)
    } catch (error) {
      console.error('Error fetching vehicle:', error)
    }
  }
  useEffect(() => {
    getVehicle(swURL, params)
  }, [])

  if (!vehicle) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
  if (vehicle) {
    return (
      <>
        <h3 className="ml-1">
          The {vehicle.name} is a very important vehicle in SW
        </h3>
        <div className="ml-2 p-2">
          <p>
            {vehicle.name} is a {vehicle.vehicle_class} type of vehicle that can
            carry up to {vehicle.cargo_capacity} kg of cargo
          </p>
          <p>
            The {vehicle.name} can carry {vehicle.passengers} people as
            passengers, and need {vehicle.crew} crew to be operated
          </p>
          <p>
            It was manufactured by {vehicle.manufacturer}, and it costs{' '}
            {vehicle.cost_in_credits} credits to purchase one
          </p>
        </div>
      </>
    )
  }
}
