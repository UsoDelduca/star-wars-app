import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/films/'

export function Film() {
  const [film, setFilm] = useState<any>()
  const params = Number(useParams().id)

  async function getFilm(swURL: string, id: number) {
    try {
      const res = await request.get(`${swURL}${id}`)
      setFilm(res.body)
    } catch (error) {
      console.error('Error fetching film:', error)
    }
  }
  useEffect(() => {
    getFilm(swURL, params)
  }, [])

  if (!film) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit">
          <LoadingSpinner />
        </p>
      </>
    )
  }
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
