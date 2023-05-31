import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Scenario from './Scenario'
import Vehicle from './Vehicle'
import ScenarioForm from './ScenarioForm'
import VehicleList from './VehicleList'
import ScenarioEdit from './ScenarioEdit'
import VehicleEdit from './VehicleEdit'

export const MainRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Scenario />} />
        <Route path='/scenario/create' element={<ScenarioForm />} />
        <Route path='/scenario/:id' element={<ScenarioEdit />} />
        <Route path='/vehicle/create' element={<Vehicle />} />
        <Route path='/vehicle' element={<VehicleList />} />
        <Route path='/vehicle/:id' element={<VehicleEdit />} />
      </Routes>
    </div>
  )
}
