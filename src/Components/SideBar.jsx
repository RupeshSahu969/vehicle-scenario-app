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
				<Link to="/vehicle"><i className="fa fa-home"></i>Home</Link>
			</li>
			<li>
				<Link to="/scenario/create"><i className="fa fa-book"></i>Add Scenario</Link>
			</li>
			<li>
				<Link to="/"><i className="fa fa-users"></i>All Scenarios</Link>
			</li>
			<li>
				<Link to="/vehicle/create"><i className="fa fa-picture-o"></i> Add Vehicle</Link>
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
