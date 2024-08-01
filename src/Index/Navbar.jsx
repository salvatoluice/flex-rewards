import React from 'react'
import logo from '../assets/flexi_logo_amber.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full py-1.5 px-[5%] flex justify-between items-center bg-gradient-to-r from-white to-red-50 h-[8vh]'>
            <Link to='/' className="flex items-center gap-2">
                <img src={logo} className='w-auto h-[35px]' alt="" />
                <p className="text-[#FFCC08] font-medium tracking-wider text-[19px]">Flexirewards</p>
            </Link>
            <div className="hidden md:flex items-center gap-4 ">
                <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Home</Link>
                <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>About</Link>
                <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Features</Link>
                <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Why Us </Link>
                <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Contact</Link>
                <Link to='/merchant/sign-in'>
                    <button className="text-white text-[14px] font-medium px-4 py-1.5 rounded-md bg-primary">Merchant Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar

// #CF3337