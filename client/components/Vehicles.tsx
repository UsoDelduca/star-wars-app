import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/vehicles/'

export function Vehicles() {
  const [vehicles, setVehicles] = useState<any>()

  async function getVehicles(swURL: string) {
    const res = await request.get(swURL)
    setVehicles(res.body)
  }
  useEffect(() => {
    getVehicles(swURL)
  }, [])

  if (vehicles) {
    const vehiclesResult = vehicles.results
    console.log('VEHICLES: ', vehiclesResult)

    return (
      <>
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
            {
              console.log('ID: ', vehiclesId)
            }
            return (
              <ul key={idx} className="pl-1 hover:underline">
                <li>
                  <Link to={vehiclesId}>{p.name}</Link>
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
            //add number of pages based on the amount of content //
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
