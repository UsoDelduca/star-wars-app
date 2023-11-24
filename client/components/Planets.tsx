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

    // const planetId = planetsResult.map((item) => {
    //   return item.url.slice(30).split('/')[0]
    // })
    // console.log('URL: ', planetId)

    return (
      <>
        {planetsResult.map(
          (
            p: {
              name: Key | string | null | undefined
              url: string

              next: string
            },
            idx: number
          ) => {
            const planetId = p.url.slice(30).split('/')[0]
            return (
              <ul key={idx} className="pl-1 hover:text-primary-yellow">
                <li>
                  <Link to={planetId}>{p.name}</Link>
                </li>
              </ul>
            )
          }
        )}

        <div>
          {planets.previous && (
            <button
              onClick={() => getplanets(planets.previous)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {planets.next && (
            <button
              onClick={() => getplanets(planets.next)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Next
            </button>
          )}
        </div>
      </>
    )
  }
  if (!planets) {
    return (
      <>
        <p className="bg-white pl-1 opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
}
