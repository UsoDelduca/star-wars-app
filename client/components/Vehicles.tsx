import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/vehicles/'
interface Vehicle {
  results: []
  name: string
  url: string
  next: string
  previous: string
}
export function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle>()
  //TODO create an apiClient file with all get functions to improve reusability
  async function getVehicles(swURL: string) {
    const res = await request.get(swURL)
    setVehicles(res.body)
  }
  useEffect(() => {
    getVehicles(swURL)
  }, [])

  if (vehicles) {
    const vehiclesResult = vehicles.results

    return (
      <>
        <p className="pl-1 pb-1">
          The API list may have been altered, so the ID looks a little odd...
        </p>
        {vehiclesResult.map(
          (
            p: {
              name: Key | string | null | undefined
              url: string

              next: string
            },
            idx: number
          ) => {
            const vehiclesId = p.url.slice(31).split('/')[0]

            return (
              <ul key={idx} className="pl-1 hover:underline">
                <li>
                  <Link to={vehiclesId}>
                    {vehiclesId} - {p.name}
                  </Link>
                </li>
              </ul>
            )
          }
        )}

        <div>
          {vehicles.previous && (
            <button
              onClick={() => getVehicles(vehicles.previous)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {vehicles.next && (
            <button
              onClick={() => getVehicles(vehicles.next)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Next
            </button>
            //TODO add number of pages based on the amount of content //
          )}
        </div>
      </>
    )
  }
  if (!vehicles) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
}
