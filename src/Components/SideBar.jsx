import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
import { MainRoutes } from '../Pages/MainRoutes'

const SideBar = () => {
  return (
    <>
      <nav>
		<ul>
			<li>
				<Link to="/vehicle">Home</Link>
			</li>
			<li>
				<Link to="/scenario/create">Add Scenario</Link>
			</li>
			<li>
				<Link to="/">All Scenarios</Link>
			</li>
			<li>
				<Link to="/vehicle/create"> Add Vehicle</Link>
			</li>
			
		</ul>
	</nav>
	<div className="wrapper">
		<div className="section">
			<div className="box-area">
          <MainRoutes/> 
			</div>
		</div>
	</div>
    </>
  )
}

export default SideBar
