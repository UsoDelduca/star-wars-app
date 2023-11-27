import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/people/'

export function People() {
  const [people, setPeople] = useState<any>()

  async function getPeople(swURL: string) {
    const res = await request.get(swURL)
    setPeople(res.body)
  }
  useEffect(() => {
    getPeople(swURL)
  }, [])

  if (people) {
    const peopleResult = people.results
    console.log(peopleResult)

    return (
      <>
        {peopleResult.map(
          (
            p: {
              name: Key | string | null | undefined
              url: string

              next: string
            },
            idx: number
          ) => {
            const peopleId = p.url.slice(29).split('/')[0]
            return (
              <ul key={idx} className="pl-1 hover:underline">
                <li>
                  <Link to={peopleId}>{p.name}</Link>
                </li>
              </ul>
            )
          }
        )}

        <div>
          {people.previous && (
            <button
              onClick={() => getPeople(people.previous)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {people.next && (
            <button
              onClick={() => getPeople(people.next)}
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
  if (!people) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
}
