import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/species/'

export function Species() {
  const [species, setSpecies] = useState<any>()

  async function getSpecies(swURL: string) {
    const res = await request.get(swURL)
    setSpecies(res.body)
  }
  useEffect(() => {
    getSpecies(swURL)
  }, [])

  if (species) {
    const speciesResult = species.results
    console.log('SPECIES: ', speciesResult)

    return (
      <>
        {speciesResult.map(
          (
            p: {
              name: Key | string | null | undefined
              url: string

              next: string
            },
            idx: number
          ) => {
            const speciesId = p.url.slice(30).split('/')[0]
            {
              console.log('ID: ', speciesId)
            }
            return (
              <ul key={idx} className="pl-1 hover:underline">
                <li>
                  <Link to={speciesId}>
                    {speciesId} - {p.name}
                  </Link>
                </li>
              </ul>
            )
          }
        )}

        <div>
          {species.previous && (
            <button
              onClick={() => getSpecies(species.previous)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {species.next && (
            <button
              onClick={() => getSpecies(species.next)}
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
  if (!species) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
}
