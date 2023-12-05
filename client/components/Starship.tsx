import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/starships/'

export function Starship() {
  const [starship, setStarship] = useState<any>()
  const params = Number(useParams().id)

  async function getStarship(swURL: string, id: number) {
    try {
      const res = await request.get(`${swURL}${id}`)
      setStarship(res.body)
    } catch (error) {
      console.error('Error fetching starship:', error)
    }
  }
  useEffect(() => {
    getStarship(swURL, params)
  }, [])

  if (!starship) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
  if (starship) {
    return (
      <>
        <h3 className="ml-1">
          The {starship.name} is a very important starship in SW
        </h3>
        <div className="ml-2 p-2">
          <p>
            The {starship.name} is a {starship.starship_class} type of starship
            that can carry up to {starship.cargo_capacity} kg of cargo
          </p>
          <p>
            The {starship.name} can carry {starship.passengers} people as
            passengers, and need {starship.crew} crew to be operated
          </p>
          <p>
            It was manufactured by {starship.manufacturer}, and it costs{' '}
            {starship.cost_in_credits} credits to purchase one
          </p>
        </div>
      </>
    )
  }
}
