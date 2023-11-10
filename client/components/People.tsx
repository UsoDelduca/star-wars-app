import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export function People() {
  const [people, setPeople] = useState()

  async function getPeople() {
    const res = await request.get('https://swapi.dev/api/people/')
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
        <div className="text-blue-600">
          <p className="bg-gray-200">This is the People of SW</p>
          {peopleResult.map(
            (p: { name: Key | string | null | undefined; next: string }) => {
              return (
                <>
                  <ul key={p.name}>
                    <li>
                      <Link to={p.name}>{p.name}</Link>
                    </li>
                  </ul>
                </>
              )
            }
          )}
          <div>
            <Link to={people.next}>Next page</Link>
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
