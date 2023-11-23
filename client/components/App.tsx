import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import request from 'superagent'
import LoadingSpinner from '../UI/UX/LoadingSpinner'
import { Header } from './Header'

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
        <div className="flex flex-col">
          <h1 className="text-2xl w-fit bg-white opacity-80 p-1 rounded">
            This is SW Wiki!
          </h1>

          <div className="flex flex-row">
            {dataKeys.map((db) => {
              return (
                <>
                  <div className="flex flex-row">
                    <li key={db} className="list-none">
                      <Link
                        to={db}
                        className="bg-white opacity-80 mr-0.5 inline-block border-1 border-t border-r rounded-t py-2 px-4 text-blue-600 hover:text-blue-900 font-semibold"
                      >
                        {db.toUpperCase()}
                      </Link>
                    </li>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className="bg-white opacity-80">
          <Header categories={dataKeys} />
          <Outlet />
        </div>
      </>
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

export default App
