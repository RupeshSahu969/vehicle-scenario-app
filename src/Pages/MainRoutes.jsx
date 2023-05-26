import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Scenario from './Scenario'
import Vehicle from './Vehicle'
import ScenarioForm from './ScenarioForm'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Scenario/>}  />
            <Route path='/create' element={<ScenarioForm/>}  />
            <Route path='/vehicle' element={<Vehicle/>}  />
        </Routes>
    </div>
  )
}
