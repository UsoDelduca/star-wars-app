import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import request from 'superagent'

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
        <h1>This is SW Wiki!</h1>

        {dataKeys.map((db) => {
          return (
            <li key={db}>
              <Link to={db}>{db.toUpperCase()}</Link>
            </li>
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
        <h1>This is SW Wiki!</h1>
        <p>Loading data...</p>
      </>
    )
  }
}

export default App
