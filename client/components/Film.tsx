import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'

const swURL = 'https://swapi.dev/api/films/'

export function Film() {
  const [film, setFilm] = useState<any>()
  const params = Number(useParams().id)

  async function getFilm(swURL: string, id: number) {
    const res = await request.get(`${swURL}${id}`)
    setFilm(res.body)
  }
  useEffect(() => {
    getFilm(swURL, params)
  }, [])

  console.log(film)

  if (film) {
    return (
      <>
        <h3 className="ml-1">
          Star Wars Episode {film.episode_id} - {film.title} was directed by{' '}
          {film.director}, and produced by {film.producer}
        </h3>
        <div className="ml-2 p-2">
          <p>&quot;{film.opening_crawl}&quot;</p>
        </div>
      </>
    )
  }
}
