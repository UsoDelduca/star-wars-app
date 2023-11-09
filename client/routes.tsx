import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import { People } from './components/People.tsx'
import { Planets } from './components/Planets.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/people" element={<People />} />
    <Route path="/planets" element={<Planets />}></Route>
  </Route>
)
