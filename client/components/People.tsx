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
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
          <p className="bg-red-400 ">This is the People of SW</p>

          {peopleResult.map(
            (
              p: {
                name: Key | string | null | undefined

                next: string
              },
              idx: number
            ) => {
              return (
                <ul key={idx}>
                  <li>
                    <Link to={`${idx + 1}`}>{p.name}</Link>
                  </li>
                </ul>
              )
            }
          )}

          <div>
            {people.previous && (
              <button onClick={() => getPeople(people.previous)}>
                Previous
              </button>
            )}
            {people.next && (
              <button onClick={() => getPeople(people.next)}>Next</button>
            )}
          </div>
        </div>
      </>
    )
  }
  if (!people) {
    return (
      <>
        <p>This is the People of SW</p>
        <LoadingSpinner />
      </>
    )
  }
}
