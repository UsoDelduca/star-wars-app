import { Outlet } from 'react-router-dom'
import { Header } from './Header'

function App() {
  return (
    <>
      <Header />
      <div className="bg-white opacity-80">
        <Outlet />
      </div>
    </>
  )
}

export default App
