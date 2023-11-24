import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

function App() {
  return (
    <>
      <div className="bg-[#0c0a09] p-5 font-8bit">
        <Header />
        <div className="bg-[#f8fafc] opacity-80 max-w-screen-md rounded border-2 border-t-primary-yellow border-b-primary-yellow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
