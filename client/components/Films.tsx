import { Key, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

const swURL = 'https://swapi.dev/api/films/'

export function Films() {
  const [films, setFilms] = useState<any>()

  async function getFilms(swURL: string) {
    const res = await request.get(swURL)
    setFilms(res.body)
  }
  useEffect(() => {
    getFilms(swURL)
  }, [])

  if (films) {
    const filmsResult = films.results
    console.log('FILMS: ', filmsResult)

    return (
      <>
        {filmsResult.map(
          (
            p: {
              title: Key | string | null | undefined
              url: string

              next: string
            },
            idx: number
          ) => {
            const filmsId = p.url.slice(28).split('/')[0]
            {
              console.log('ID: ', filmsId)
            }
            return (
              <ul key={idx} className="pl-1  hover:underline">
                <li>
                  <Link to={filmsId}>{p.title}</Link>
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
            //add number of pages based on the amount of content //
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
