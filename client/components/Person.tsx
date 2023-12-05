import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/people/'

export function Person() {
  const [person, SetPerson] = useState<any>()
  const params = Number(useParams().id)

  async function getPerson(swURL: string, id: number) {
    try {
      const res = await request.get(`${swURL}${id}`)
      SetPerson(res.body)
    } catch (error) {
      console.error('Error fetching person:', error)
    }
  }
  useEffect(() => {
    getPerson(swURL, params)
  }, [])

  if (!person) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
  if (person) {
    return (
      <>
        <h3 className="ml-1">{person.name} is a very important person in SW</h3>
        <div className="ml-2 p-2">
          <p>
            {person.name} is a {person.gender}
          </p>
          <p>
            {person.name}&rsquo;s height is {person.height} cm
          </p>
          <p>Their skin is {person.skin_color}</p>
          <p>Their weight is {person.mass} kg</p>
          <p>
            {person.name}&rsquo;s homeworld is called {person.homeworld}
          </p>
        </div>
      </>
    )
  }
}
