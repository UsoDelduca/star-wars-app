import { useState, useEffect } from 'react'
import request from 'superagent'
import { getSwapi } from '../apiClient.ts'

function App() {
  const [data, setData] = useState()

  async function getSWData() {
    const res = await request.get(getSwapi)
    setData(res.body)
  }

  useEffect(() => {
    getSWData()
  }, [])

  console.log(data)
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
