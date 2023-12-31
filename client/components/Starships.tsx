import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/starships/'
interface Starship {
  results: []
  name: string
  url: string
  next: string
  previous: string
}
export function Starships() {
  const [starships, setStarships] = useState<Starship>()
  //TODO create an apiClient file with all get functions to improve reusability
  async function getStarships(swURL: string) {
    const res = await request.get(swURL)
    setStarships(res.body)
  }
  useEffect(() => {
    getStarships(swURL)
  }, [])

  if (starships) {
    const starshipsResult = starships.results

    return (
      <>
        <p className="pl-1 pb-1">
          The API list may have been altered, so the ID looks a little odd...
        </p>
        {starshipsResult.map(
          (
            p: {
              name: Key | string | null | undefined
              url: string

              next: string
            },
            idx: number
          ) => {
            const starshipsId = p.url.slice(32).split('/')[0]

            return (
              <ul key={idx} className="pl-1 hover:underline">
                <li>
                  <Link to={starshipsId}>
                    {starshipsId} - {p.name}
                  </Link>
                </li>
              </ul>
            )
          }
        )}

        <div>
          {starships.previous && (
            <button
              onClick={() => getStarships(starships.previous)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {starships.next && (
            <button
              onClick={() => getStarships(starships.next)}
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
  if (!starships) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
}
