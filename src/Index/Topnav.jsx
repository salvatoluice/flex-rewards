import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/flexi_logo_black.svg';

const Topnav = ({text}) => {
  return (
    <div className='w-full flex py-2 text-black pb-4 flex-col justify-between bg-gradient-to-b from-primary to-white h-[200px] px-[5%]'>
        <div className="flex w-full justify-between h-[35px] items-center">
              <Link to='/' className="flex items-center gap-2">
                  <img src={logo} className='w-auto h-[35px]' alt="" />
                  <p className="text-black hidden md:flex font-medium tracking-wider text-[19px]">Flexirewards</p>
              </Link>
              <div className="hidden md:flex items-center gap-4 ">
                  <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-white'>Home</Link>
                  <Link to='/company/about' className='text-gray-700 font-medium text-[15px] hover:text-white'>About</Link>
                  <Link to='/features' className='text-gray-700 font-medium text-[15px] hover:text-white'>Features</Link>
                  <Link to='/company/faqs' className='text-gray-700 font-medium text-[15px] hover:text-white'>FAQs </Link>
                  <Link to='/customer-support' className='text-gray-700 font-medium text-[15px] hover:text-white'>Contact</Link>
                  <Link to='/merchant/sign-in'>
                      <button className="text-white text-[14px] font-medium px-4 py-1.5 rounded-md shadow-md bg-primary">Merchant Login</button>
                  </Link>
              </div>
        </div>
        <p className="Text-black text-[24px] font-medium mb-4">{text}</p>
    </div>
  )
}

export default Topnav