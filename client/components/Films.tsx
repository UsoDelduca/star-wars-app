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
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
          <p className="bg-white pl-1 ">This are the Films of SW</p>

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
                <ul key={idx} className="pl-1">
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
                className="bg-white mr-1 text-blue-600 hover:text-blue-900 font-semibold py-2 px-4 rounded"
              >
                Previous
              </button>
            )}
            {films.next && (
              <button
                onClick={() => getFilms(films.next)}
                className="bg-white text-blue-600 hover:text-blue-900 font-semibold py-2 px-4 rounded"
              >
                Next
              </button>
              //add number of pages based on the amount of content //
            )}
          </div>
        </div>
      </>
    )
  }
  if (!films) {
    return (
      <>
        <p className="bg-white pl-1 ">This are the Films of SW</p>
        <div className="m-2">
          <LoadingSpinner />
        </div>
      </>
    )
  }
}
