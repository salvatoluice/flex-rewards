import React from 'react'
import { BsApple, BsArrowUpRight } from 'react-icons/bs'
import { FaGooglePlay } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import img1 from '../assets/convenient.png';
import img2 from '../assets/flexibility.png';
import img3 from '../assets/rate.png'
import image from '../assets/Image.png'
import Navbar from '../Index/Navbar'
import Hero from '../Index/Hero'
import Footer from '../Index/Footer'

const Home = () => {
    const blueDivStyle = {
        transform: "rotate(7deg)",
    };
    return (
        <div>
            <div className="h-full">
                <Navbar />
                <section className="imagebg h-[93vh] px-[10%] flex items-center ">
                    <div className="relative h-full w-full flex items-center">
                        <div
                            style={blueDivStyle}
                            className="bg-primary rounded-md w-full h-3/5 md:w-[50%]"
                        ></div>
                        <div className="absolute rounded-md bg-white bg-opacity-80 flex flex-col justify-center gap-3 py-4 px-8  w-full md:w-[50%] h-[60%] ">
                            <p className="text-[18px] md:text-[24px] text-primary font-semibold ">
                                Welcome to Flexi
                            </p>
                            <p className="text-[20px] font-semibold text-secondary leading-[1.2]">
                                Unlocking a secure financial solution
                            </p>
                            <p className="text-secondary text-[14px] md:text-[16px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatibus consequatur magnam rem magni iste laboriosam quisquam totam, cum.
                            </p>
                            <button className="w-full bg-primary py-1 text-secondary flex items-center rounded-md justify-center gap-2">
                                Get Started <BsArrowUpRight />{" "}
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Banner section */}
            <section className="w-full bg-primary py-6 gap-4 md:gap-0 px-[10%] flex flex-col md:flex-row ">
                <div className="flex flex-col gap-2 w-full md:w-[30%]">
                    <img src={img1} className="w-[48px] h-[48px] " alt="" />
                    <p className="text-secondary text-[32px] font-semibold ">
                        Convenience
                    </p>
                    <p className="text-[16px] text-secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatibus
                    </p>
                </div>
                <div className="flex md:border-l md:border-r border-secondary flex-col md:px-4 gap-2 w-full md:w-[30%]">
                    <img src={img2} className="w-[48px] h-[48px] " alt="" />
                    <p className="text-secondary text-[32px] font-semibold ">
                        Flexibility
                    </p>
                    <p className="text-[16px] text-secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatibus
                    </p>
                </div>
                <div className="flex md:pl-4 flex-col gap-2 w-full md:w-[30%]">
                    <img src={img3} className="w-[48px] h-[48px] " alt="" />
                    <p className="text-secondary text-[32px] font-semibold ">
                        Affordable Rates
                    </p>
                    <p className="text-[16px] text-secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatibus
                    </p>
                </div>
            </section>

            {/* About us */}
            <section className="px-[10%] bg-white flex flex-col md:flex-row items-center py-10 ">
                <div className="relative h-full w-full gap-4 md:gap-8 flex flex-col md:flex-row items-center">
                    <div className="flex w-full md:w-[50%]">
                        <div
                            style={blueDivStyle}
                            className="bg-primary w-full md:h-[400px] rounded-md h-full md:w-[400px]"
                        ></div>
                        <div className="absolute top-0 ">
                            <img src={image} className="h-full md:h-[400px] rounded-md w-full md:w-[400px]" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full md:w-2/3 flex flex-col gap-4">
                            <p className="text-[16px] text-primary font-semibold">About Us</p>
                            <p className="text-[32px] text-secondary font-semibold">
                                Who is Flexi?
                            </p>
                            <p className="text-[16px] text-secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam soluta provident cumque. Quam perferendis debitis neque provident illum, facere aspernatur eius quod animi
                            </p>
                            <button className="rounded-md w-full bg-primary py-1 text-secondary flex items-center justify-center gap-2">
                                More about Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key features */}
            <section className="flex flex-col md:flex-row bg-[#EDF0FF] gap-4 py-8 items-center px-[10%] ">
                <div className="flex flex-col gap-4 justify-start text-start">
                    <p className="text-[14px] uppercase text-primary font-medium -mb-4 ">
                        Key features
                    </p>
                    <p className="text-[24] text-black font-semibold">
                        The Flexi Advantage
                    </p>
                    <p className="text-[14px] text-gray-600 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi temporibus
                    </p>
                    <div className="flex">
                        <button className="rounded-md bg-primary text-white px-6 py-1.5">
                            How It Works
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col mt-12 gap-4">
                        <div className="bg-[#FCFCFC] rounded-md cursor-pointer transition text-secondary p-4 flex flex-col gap-3">
                            <p className="text-[20px] font-medium">Instant Compensation </p>
                            <p className="text-[14px] text-gray-600 font-light ">
                                With Flexi, retailers are compensated immediately upon a
                                credit sale, ensuring you're never financially burdened by
                                credit transactions.
                            </p>
                            <p className="text-primary flex items-center gap-2 text-[14px]">
                                Read More
                            </p>
                        </div>
                        <div className="bg-[#FCFCFC] rounded-md cursor-pointer transition text-secondary p-4 flex flex-col gap-3">
                            <p className="text-[20px] font-medium">Instant Compensation </p>
                            <p className="text-[14px] text-gray-600 font-light">
                                With Flexi, retailers are compensated immediately upon a
                                credit sale, ensuring you're never financially burdened by
                                credit transactions.
                            </p>
                            <p className="text-primary flex items-center gap-2 text-[14px]">
                                Read More
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-12 gap-4">
                        <div className="bg-[#FCFCFC] rounded-md cursor-pointer transition text-secondary p-4 flex flex-col gap-3">
                            <p className="text-[20px] font-medium">Instant Compensation </p>
                            <p className="text-[14px] text-gray-600 font-light">
                                With Flexi, retailers are compensated immediately upon a
                                credit sale, ensuring you're never financially burdened by
                                credit transactions.
                            </p>
                            <p className="text-primary flex items-center gap-2 text-[14px]">
                                Read More
                            </p>
                        </div>
                        <div className="bg-[#FCFCFC] rounded-md cursor-pointer transition text-secondary p-4 flex flex-col gap-3">
                            <p className="text-[20px] font-medium">Instant Compensation </p>
                            <p className="text-[14px] text-gray-600 font-light">
                                With Flexi, retailers are compensated immediately upon a
                                credit sale, ensuring you're never financially burdened by
                                credit transactions.
                            </p>
                            <p className="text-primary flex items-center gap-2 text-[14px]">
                                Read more
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="flex bg-gray-50 flex-col w-full px-[10%] justify-center items-center py-6">
                <p className="uppercase text-[16px] text-primary">how it works</p>
                <p className="capitalize text-[32px] text-secondary font-semibold">
                    why Flexi
                </p>
                <p className="md:w-[70%] text-[14px] text-gray-600 font-light text-center">
                    Flexi is not just a software; it's a solution designed to
                    revolutionize the payments. Here's why you should
                    choose us:
                </p>
                <div className="flex flex-col md:flex-row justify-between mt-8 gap-8 md:gap-4">
                    <div className="relative bg-white flex flex-col items-center justify-center py-6 px-3">
                        <div className="absolute -top-[26px] w-[52px] h-[52px] bg-yellow-200 rounded-full flex mx-auto justify-center items-center">
                            <p className="text-primary font-medium text-[18px]">2</p>
                        </div>
                        <p className="text-[18px] text-center pb-2  capitalize font-medium">
                            User-Friendly Interface
                        </p>
                        <p className="text-[14px] font-light text-center text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam soluta provident cumque. Quam perferendis debitis neque provident illum, facere aspernatur eius quod animi
                        </p>
                    </div>
                    <div className="relative bg-white flex flex-col items-center justify-center py-6 px-3">
                        <div className="absolute -top-[26px] w-[52px] h-[52px] bg-yellow-200 rounded-full flex mx-auto justify-center items-center">
                            <p className="text-primary font-medium text-[18px]">2</p>
                        </div>
                        <p className="text-[18px] text-center pb-2  capitalize font-medium">
                            User-Friendly Interface
                        </p>
                        <p className="text-[14px] font-light text-center text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam soluta provident cumque. Quam perferendis debitis neque provident illum, facere aspernatur eius quod animi
                        </p>
                    </div>
                    <div className="relative bg-white flex flex-col items-center justify-center py-6 px-3">
                        <div className="absolute -top-[26px] w-[52px] h-[52px] bg-yellow-200 rounded-full flex mx-auto justify-center items-center">
                            <p className="text-primary font-medium text-[18px]">2</p>
                        </div>
                        <p className="text-[18px] text-center pb-2  capitalize font-medium">
                            User-Friendly Interface
                        </p>
                        <p className="text-[14px] font-light text-center text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam soluta provident cumque. Quam perferendis debitis neque provident illum, facere aspernatur eius quod animi
                        </p>
                    </div>
                    <div className="relative bg-white flex flex-col items-center justify-center py-6 px-3">
                        <div className="absolute -top-[26px] w-[52px] h-[52px] bg-yellow-200 rounded-full flex mx-auto justify-center items-center">
                            <p className="text-primary font-medium text-[18px]">2</p>
                        </div>
                        <p className="text-[18px] text-center pb-2  capitalize font-medium">
                            User-Friendly Interface
                        </p>
                        <p className="text-[14px] font-light text-center text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam soluta provident cumque. Quam perferendis debitis neque provident illum, facere aspernatur eius quod animi
                        </p>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="flex flex-col md:flex-row px-[10%] py-6 items-center bg-primary">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <p className="flex text-secondary text-[20px] lg:text-[32px] font-medium capitalize">
                        join the future of finance and payments
                    </p>
                    <p className="text-[14px] font-light text-gray-800">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas illo modi quo, quisquam qui, sapiente dignissimos sit perferendis culpa mollitia porro repellendus accusamus velit! Ex esse provident in dignissimos minima!
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="bg-white py-4 px-6 text-secondary gap-2 flex items-center">
                        <p className="text-[20px] font-medium">#</p>
                        <span className="flex flex-col">
                            <span className="text-[14px] ">Dial:</span>
                            <span className="text-[18px] font-medium">*483*800#</span>
                        </span>
                    </div>
                    <div className="bg-white py-4 px-6 text-secondary gap-2 flex items-center">
                        <p className="text-[20px] font-medium">
                            <FaGooglePlay />
                        </p>
                        <span className="flex flex-col">
                            <span className="text-[14px] capitalize">Get it on</span>
                            <span className="text-[18px] font-medium">Google Play</span>
                        </span>
                    </div>
                    <div className="bg-white py-4 px-6 text-secondary gap-2 flex items-center">
                        <p className="text-[20px] font-medium">
                            <BsApple />
                        </p>
                        <span className="flex flex-col">
                            <span className="text-[14px] capitalize">download on</span>
                            <span className="text-[18px] font-medium">App Store</span>
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home