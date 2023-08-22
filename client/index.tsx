import { createRoot } from 'react-dom/client'

import App from './components/App.tsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { People } from './components/People.tsx'
import { Planets } from './components/Planets.tsx'

document.addEventListener('DOMContentLoaded', () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />}></Route>
      </Route>
    )
  )
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={routes} />
  )
})
