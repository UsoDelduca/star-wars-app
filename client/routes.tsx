import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import { People } from './components/People.tsx'
import { Planets } from './components/Planets.tsx'
import { Films } from './components/Films.tsx'
import { Species } from './components/Species.tsx'
import { Vehicles } from './components/Vehicles.tsx'
import { Starships } from './components/Starships.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/people" element={<People />} />
    <Route path="/planets" element={<Planets />} />
    <Route path="/films" element={<Films />} />
    <Route path="/species" element={<Species />} />
    <Route path="/vehicles" element={<Vehicles />} />
    <Route path="/starships" element={<Starships />} />
  </Route>
)
