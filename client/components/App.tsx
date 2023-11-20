import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'

function App() {
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
      <>
        <h1 className="text-2xl">This is SW Wiki!</h1>

        {dataKeys.map((db) => {
          return (
            <>
              <ul className="flex">
                <li key={db} className="list-none">
                  <Link
                    to={db}
                    className="bg-white inline-block border-1 border-t border-r rounded-t py-2 px-4 text-blue-600 hover:text-blue-900 font-semibold"
                  >
                    {db.toUpperCase()}
                  </Link>
                </li>
              </ul>
            </>
          )
        })}
        <div>
          <Outlet />
        </div>
      </>
    )
  }
  if (!data) {
    return (
      <>
        <h1 className="text-2xl">This is SW Wiki!</h1>
        <LoadingSpinner />
      </>
    )
  }
}

export default App
