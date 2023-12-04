import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'

const swURL = 'https://swapi.dev/api/species/'

export function Specie() {
  const [specie, setSpecie] = useState<any>()
  const params = Number(useParams().id)

  async function getSpecie(swURL: string, id: number) {
    const res = await request.get(`${swURL}${id}`)
    setSpecie(res.body)
  }
  useEffect(() => {
    getSpecie(swURL, params)
  }, [])

  console.log(specie)

  if (specie) {
    if (specie.name === 'Droid') {
      return (
        <>
          <h3 className="ml-1">
            The {specie.name} species is a very important one in SW
          </h3>
          <div className="ml-2 p-2">
            <p>
              {specie.name}s are {specie.designation} {specie.classification}s
            </p>
            <p>
              {specie.name}s have an {specie.average_lifespan} average lifespan,
              and a variety of heights
            </p>
            <p>{specie.name}s can have any colour of eyes</p>
            <p>
              {specie.name}s speak any language and don&rsquo;t have a homeworld
            </p>
          </div>
        </>
      )
    }
    return (
      <>
        <h3 className="ml-1">
          The {specie.name} species is a very important one in SW
        </h3>
        <div className="ml-2 p-2">
          <p>
            {specie.name}s are {specie.designation} {specie.classification}s
          </p>
          <p>
            {specie.name}s have an average lifespan of {specie.average_lifespan}{' '}
            years, and an average height of {specie.average_height} cm
          </p>
          <p>
            {specie.name}s can have {specie.eye_colors} eyes
          </p>
          <p>
            {specie.name}s speak {specie.language} and are originally from{' '}
            {specie.homeworld}
          </p>
        </div>
      </>
    )
  }
}
