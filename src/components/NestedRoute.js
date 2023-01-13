import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NestedRoute() {
  return    <div style={{display:"flex",flexDirection:"column"}}>
    <div>
        <h1>Nested Route Component</h1>
    </div>
    <div>
        <p>In this componenet we are going to see the concept of Nested routing</p>

    </div>
    <div>
        <ul>
            <li><Link to='profile'><b>Profile</b></Link></li>
            <li><Link to='Account'><b>Account</b></Link></li>
            <li><Link to='/nested-route-example'><b>Home</b></Link></li>
        </ul>
    </div>
      <Outlet/>
    </div>
  
}

export default NestedRoute
