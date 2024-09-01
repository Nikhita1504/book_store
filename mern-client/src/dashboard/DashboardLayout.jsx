import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-cl md:flex-rpw'>
        <SideBar/>

      <Outlet/>
    </div>
  )
}

export default DashboardLayout
