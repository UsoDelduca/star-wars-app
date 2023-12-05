import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/planets/'

export function Planet() {
  const [planet, setPlanet] = useState<any>()
  const params = Number(useParams().id)

  async function getPlanet(swURL: string, id: number) {
    try {
      const res = await request.get(`${swURL}${id}`)
      setPlanet(res.body)
    } catch (error) {
      console.error('Error fetching planet:', error)
    }
  }
  useEffect(() => {
    getPlanet(swURL, params)
  }, [])

  if (!planet) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
  if (planet) {
    return (
      <>
        <h3 className="ml-1">{planet.name} is a very important planet in SW</h3>
        <div className="ml-2 p-2">
          <p>
            {planet.name} is {planet.climate} type planet
          </p>
          <p>
            {planet.name}&rsquo;s diameter is {planet.diameter} km
          </p>
          <p>
            {planet.name}&rsquo;s gravity is {planet.gravity} G
          </p>
          <p>
            It takes {planet.name} {planet.rotation_period} standard hours to
            complete a single rotation on its axis (full day)
          </p>
          <p>
            It takes {planet.name} {planet.orbital_period} standard days to
            complete a single orbit around its star (full year){' '}
          </p>
          <p>
            {planet.name}&rsquo;s population is {planet.population} people
          </p>
        </div>
      </>
    )
  }
}
