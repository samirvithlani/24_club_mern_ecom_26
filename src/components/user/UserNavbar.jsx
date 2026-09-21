import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserNavbar = () => {
  return (
    <div>
        <h1>UserNavbar</h1>
        {/* outlet component is use for loading child component */}
        
        <Outlet/>
    </div>
  )
}
