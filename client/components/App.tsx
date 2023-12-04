import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

function App() {
  return (
    <>
      <div
        className="text-primary-yellow font-8bit w-full
    h-screen
    bg-gradient-to-r
    from-[#0c0a09]
    via-[black]
    to-[#dbd7fb]
    "
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
