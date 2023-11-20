import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/planets/'

export function Planets() {
  const [planets, setPlanets] = useState<any>()

  async function getplanets(swURL: string) {
    const res = await request.get(swURL)
    setPlanets(res.body)
  }
  useEffect(() => {
    getplanets(swURL)
  }, [])

  if (planets) {
    const planetsResult = planets.results
    console.log(planetsResult)
    return (
      <>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
          <p className="bg-white pl-1 ">This are the planets of SW</p>

          {planetsResult.map(
            (
              p: {
                name: Key | string | null | undefined

                next: string
              },
              idx: number
            ) => {
              return (
                <ul key={idx} className="pl-1">
                  <li>
                    <Link to={`${idx + 1}`}>{p.name}</Link>
                  </li>
                </ul>
              )
            }
          )}

          <div>
            {planets.previous && (
              <button
                onClick={() => getplanets(planets.previous)}
                className="bg-white mr-1 text-blue-600 hover:text-blue-900 font-semibold py-2 px-4 rounded"
              >
                Previous
              </button>
            )}
            {planets.next && (
              <button
                onClick={() => getplanets(planets.next)}
                className="bg-white text-blue-600 hover:text-blue-900 font-semibold py-2 px-4 rounded"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </>
    )
  }
  if (!planets) {
    return (
      <>
        <p className="bg-white pl-1 ">This are the planets of SW</p>
        <div className="m-2">
          <LoadingSpinner />
        </div>
      </>
    )
  }
}
