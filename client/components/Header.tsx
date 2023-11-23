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
        <h1 className="text-2xl w-fit bg-white opacity-80 p-1 rounded">
          This is SW Wiki!
        </h1>

        <div className="flex flex-row">
          {dataKeys.map((category) => {
            return (
              <>
                <div className="flex flex-row">
                  <li key={category} className="list-none">
                    <Link
                      to={category}
                      className="bg-white opacity-80 mr-0.5 inline-block border-1 border-t border-r rounded-t py-2 px-4 text-blue-600 hover:text-blue-900 font-semibold"
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
