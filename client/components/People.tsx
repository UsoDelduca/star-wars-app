import { useEffect, useState } from 'react'
import request from 'superagent'

export function People() {
  const [people, setPeople] = useState([])

  async function getPeople() {
    const res = await request.get('https://swapi.dev/api/people/')
    setPeople(res.body)
  }
  useEffect(() => {
    getPeople()
  }, [])

  // const names = people?.results
  console.log('NAAAAAAMES', people)
  if (people) {
    const dataKeys = Object.keys(people)
    return (
      <>
        <p className="bg-gray-200">This is the People of SW</p>
        {dataKeys.map((p) => {
          return (
            <ul key={p}>
              <li>{p}</li>
            </ul>
          )
        })}
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
