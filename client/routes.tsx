import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import { People } from './components/People.tsx'
import { Planets } from './components/Planets.tsx'
import { Films } from './components/Films.tsx'
import { Species } from './components/Species.tsx'
import { Vehicles } from './components/Vehicles.tsx'
import { Starships } from './components/Starships.tsx'
import { Person } from './components/Person.tsx'
import { Planet } from './components/Planet.tsx'
import { Film } from './components/Film.tsx'
import { Specie } from './components/Specie.tsx'
import { Vehicle } from './components/Vehicle.tsx'
import { Starship } from './components/Starship.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/people" element={<People />} />
    <Route path="/people/:id" element={<Person />} />
    <Route path="/planets" element={<Planets />} />
    <Route path="planets/:id" element={<Planet />} />
    <Route path="/films" element={<Films />} />
    <Route path="/films/:id" element={<Film />} />
    <Route path="/species" element={<Species />} />
    <Route path="/species/:id" element={<Specie />} />
    <Route path="/vehicles" element={<Vehicles />} />
    <Route path="/vehicles/:id" element={<Vehicle />} />
    <Route path="/starships" element={<Starships />} />
    <Route path="/starships/:id" element={<Starship />} />
  </Route>
)
