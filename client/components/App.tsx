import { Outlet } from 'react-router-dom'
import { Header } from './Header'

function App() {
  return (
    <>
      <div className="bg-black bg-dotted-white bg-dotted-spacing-2 p-5 font-8bit">
        <Header />
        <div className="bg-white opacity-80">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
