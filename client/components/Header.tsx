import { Link } from 'react-router-dom'
import LoadingSpinner from '../UI/UX/LoadingSpinner'
import { useEffect, useState } from 'react'
import request from 'superagent'

export function Header() {
  const [data, setData] = useState()

  async function getSWData() {
    const res = await request.get('https://swapi.dev/api')
    setData(res.body)
  }

  useEffect(() => {
    getSWData()
  }, [])

  if (data) {
    const dataKeys = Object.keys(data)
    return (
      <div className="flex flex-col">
        <h1 className="text-2xl w-fit text-primary-yellow p-1 rounded">
          <Link to={'/'}> This is the SW File System!</Link>
        </h1>
        <p className="pb-1 pl-1">Choose a category to view more information:</p>

        <div className="flex flex-row">
          {dataKeys.map((category) => {
            return (
              <>
                <div className="flex flex-row">
                  <li key={category} className="list-none">
                    <Link
                      to={category}
                      className="mr-0.5 inline-block border-1 border-t border-r rounded-t py-2 px-4 hover:text-[white]"
                    >
                      {category.toUpperCase()}
                    </Link>
                  </li>
                </div>
              </>
            )
          })}
        </div>
      </div>
    )
  }
  if (!data) {
    return (
      <>
        <LoadingSpinner />
      </>
    )
  }
}
