import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

const swURL = 'https://swapi.dev/api/people/'

export function People() {
  const [people, setPeople] = useState()

  async function getPeople() {
    const res = await request.get(swURL)
    setPeople(res.body)
  }
  useEffect(() => {
    getPeople()
  }, [])

  // const names = people?.results
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
                <>
                  <ul key={p.name}>
                    <li>
                      <Link to={`${idx + 1}`}>{p.name}</Link>
                    </li>
                  </ul>
                </>
              )
            }
          )}
          <div>
            <Link to="swRUL/?page=2">Next page</Link>
          </div>
        </div>
      </>
    )
  }
  if (!people) {
    return (
      <>
        <p>This is the People of SW</p>
        <p>Loading data...</p>
      </>
    )
  }
}
