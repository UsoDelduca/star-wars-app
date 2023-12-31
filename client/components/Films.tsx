import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/films/'
interface Film {
  results: []
  title: string
  url: string
  release_date: string
  next: string
  previous: string
}
export function Films() {
  const [films, setFilms] = useState<Film>()

  //TODO create an apiClient file with all get functions to improve reusability
  async function getFilms(swURL: string) {
    const res = await request.get(swURL)
    setFilms(res.body)
  }
  useEffect(() => {
    getFilms(swURL)
  }, [])

  if (films) {
    const filmsResult = films.results

    return (
      <>
        {filmsResult.map(
          (
            p: {
              title: Key | string | null | undefined
              url: string
              release_date: string
              next: string
            },
            idx: number
          ) => {
            const filmsId = p.url.slice(28).split('/')[0]
            const releasedYear = p.release_date.substring(0, 4)

            return (
              <ul key={idx} className="pl-1  hover:underline">
                <li>
                  <Link to={filmsId}>
                    {releasedYear} - {p.title}
                  </Link>
                </li>
              </ul>
            )
          }
        )}

        <div>
          {films.previous && (
            <button
              onClick={() => getFilms(films.previous)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {films.next && (
            <button
              onClick={() => getFilms(films.next)}
              className="bg-[#e5e7eb] text-[#2563eb] hover:text-[#1e3a8a] font-semibold ml-1 mb-1 py-2 px-4 rounded"
            >
              Next
            </button>
          )}
        </div>
      </>
    )
  }
  if (!films) {
    return (
      <>
        <p className="bg-white opacity-80 pl-1 w-fit ">
          <LoadingSpinner />
        </p>
      </>
    )
  }
}
