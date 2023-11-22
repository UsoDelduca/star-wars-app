import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/starships/'

export function Starships() {
  const [starships, setStarships] = useState<any>()

  async function getStarships(swURL: string) {
    const res = await request.get(swURL)
    setStarships(res.body)
  }
  useEffect(() => {
    getStarships(swURL)
  }, [])

  if (starships) {
    const starshipsResult = starships.results
    console.log('SPECIES: ', starshipsResult)

    return (
      <>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
          <p className="bg-white pl-1 ">This are the Starships of SW</p>

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
              {
                console.log('ID: ', starshipsId)
              }
              return (
                <ul key={idx} className="pl-1">
                  <li>
                    <Link to={starshipsId}>{p.name}</Link>
                  </li>
                </ul>
              )
            }
          )}

          <div>
            {starships.previous && (
              <button
                onClick={() => getStarships(starships.previous)}
                className="bg-white mr-1 text-blue-600 hover:text-blue-900 font-semibold py-2 px-4 rounded"
              >
                Previous
              </button>
            )}
            {starships.next && (
              <button
                onClick={() => getStarships(starships.next)}
                className="bg-white text-blue-600 hover:text-blue-900 font-semibold py-2 px-4 rounded"
              >
                Next
              </button>
              //add number of pages based on the amount of content //
            )}
          </div>
        </div>
      </>
    )
  }
  if (!starships) {
    return (
      <>
        <p className="bg-white pl-1 ">This are the Starships of SW</p>
        <div className="m-2">
          <LoadingSpinner />
        </div>
      </>
    )
  }
}
