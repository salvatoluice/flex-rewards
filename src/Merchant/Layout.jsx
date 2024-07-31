import React from 'react'
import SideNav from './Sidenav'

const Layout = ({children}) => {
  return (
    <div className='w-full flex'>
        <SideNav />
        <div className="w-full md:w-[80%] bg-gray-100 flex flex-col py-8 pr-[5%] pl-[5%] md:pl-8 h-[100vh] overflow-y-auto">{children}</div>
    </div>
  )
}

export default Layout