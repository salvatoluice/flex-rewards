import React, { useState } from 'react'
import logo from '../assets/flexi_logo_amber.svg';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full py-1.5 px-[5%] flex justify-between items-center bg-gradient-to-r from-white to-red-50 h-[8vh]'>
            <Link to='/' className="flex items-center gap-2">
                <img src={logo} className='w-auto h-[35px]' alt="" />
                <p className="text-[#FFCC08] hidden md:flex font-medium tracking-wider text-[19px]">Flexirewards</p>
            </Link>
            <div className="hidden md:flex items-center gap-4 ">
                <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Home</Link>
                <Link to='/company/about' className='text-gray-700 font-medium text-[15px] hover:text-primary'>About</Link>
                <Link to='/features' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Features</Link>
                <Link to='/company/faqs' className='text-gray-700 font-medium text-[15px] hover:text-primary'>FAQs </Link>
                <Link to='/customer-support' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Contact</Link>
                <Link to='/merchant/sign-in'>
                    <button className="text-white text-[14px] font-medium px-4 py-1.5 rounded-md bg-primary">Merchant Login</button>
                </Link>
            </div>
            <div className="flex md:hidden text-primary relative">
                <button onClick={() => setOpen(!open)}>
                    {
                        open ? <IoMdClose size={24} /> : <RiMenu3Fill size={24} />
                    }
                </button>
                {open && (
                    <div className="absolute z-20 bg-white w-[200px] top-6 right-5 rounded-md p-4 flex flex-col gap-2">
                        <Link to='/' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Home</Link>
                        <Link to='/company/about' className='text-gray-700 font-medium text-[15px] hover:text-primary'>About</Link>
                        <Link to='/features' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Features</Link>
                        <Link to='/company/faqs' className='text-gray-700 font-medium text-[15px] hover:text-primary'>FAQs </Link>
                        <Link to='/customer-support' className='text-gray-700 font-medium text-[15px] hover:text-primary'>Contact</Link>
                        <Link to='/merchant/sign-in'>
                            <button className="text-white text-[14px] font-medium px-4 py-1.5 rounded-md bg-primary">Merchant Login</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
