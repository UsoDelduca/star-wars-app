import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

function App() {
  return (
    <>
      <div className="text-primary-yellow p-5 font-8bit">
        <Header />
        <Outlet />
        <div className="bg-[#dbd7fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[32.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#0c0a09] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
