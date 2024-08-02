import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { HiOutlineUsers } from 'react-icons/hi';
import logo from '../assets/flexi_logo_amber.svg';

const Topmenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const logoutUser = () => {
        localStorage.removeItem('access_token');
        navigate('/');
        window.location.reload();
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-white fixed w-full text-white md:hidden px-[5%] h-[8vh] flex items-center tracking-wide">
                <div className="flex w-full items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 block md:hidden focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Link to='/' className="flex items-center mx-auto gap-2 pl-2">
                        <img src={logo} className='w-auto h-[20px]' alt="" />
                        <p className="text-[#FFCC08] flex font-medium tracking-wider text-[19px]">Flexirewards</p>
                    </Link>
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}

            <div
                className={`fixed top-0 left-0 h-full w-3/4 max-w-xs overflow-y-auto bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="h-full flex flex-col justify-between p-6">
                    <div className="flex h-full flex-col">
                        <Link to='/' className="flex items-center gap-2 pl-2">
                            <img src={logo} className='w-auto h-[20px]' alt="" />
                            <p className="text-[#FFCC08] flex font-medium tracking-wider text-[19px]">Flexirewards</p>
                        </Link>
                        <div className="flex flex-col mt-4 text-gray-700 text-[14px] font-light gap-3">
                            <Link
                                to='/merchant/dashboard'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/merchant/dashboard' ? 'bg-yellow-50 text-primary font-medium' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Dashboard
                            </Link>
                            <Link
                                to='/merchant/orders'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/merchant/orders' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Orders
                            </Link>
                            <Link
                                to='/merchant/deals'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/merchant/deals' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                Deals
                            </Link>
                            <Link
                                to='/merchant/payments'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/manage/payments' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                Payments
                            </Link>
                            <Link
                                to='/merchant/payments'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/manage/payments' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.621 9.879a3 3 0 0 0-5.02 2.897l.164.609a4.5 4.5 0 0 1-.108 2.676l-.157.439.44-.22a2.863 2.863 0 0 1 2.185-.155c.72.24 1.507.184 2.186-.155L15 18M8.25 15.75H12m-1.5-13.5H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Reports
                            </Link>
                            <Link
                                to='/manage/users'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/manage/users' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <HiOutlineUsers /> Sales
                            </Link>
                            <Link
                                to='/manage/tickets'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/manage/tickets' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                </svg>
                                Tickets
                            </Link>
                            <Link
                                to='/'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                Profile
                            </Link>
                            <Link
                                to='/'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                Settings
                            </Link>
                            <Link
                                to='/'
                                className={`py-1.5 px-2 rounded-md flex items-center gap-2 hover:bg-gray-50 hover:text-primary ${location.pathname === '/' ? 'bg-gray-100 text-primary' : ''
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                                Notifications
                            </Link>
                        </div>
                    </div>
                    <button className="w-full bg-primary py-1.5 text-white rounded-md outline-none text-[14px]">Log out</button>
                </div>
            </div>
        </>
    );
};

export default Topmenu;
