import React from 'react'
import Topnav from './Topnav'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Topnav text={'About Us'} />
            <div className="flex flex-col px-[5%] ">
                <div className="flex w-full flex-col md:flex-row justify-between">
                    <div className="flex flex-col w-full md:w-[50%]">
                        <p className="text-primary uppercase font-medium text-[15px]">Secure and innovative</p>
                        <p className="text-[24px] text-black font-semibold tracking-wider">Streamlined financial system</p>
                        <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet distinctio maiores reiciendis iure eaque totam nam labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet distinctio maiores reiciendis iure eaque totam nam labore</p>
                    </div>
                    <img className='w-full md:w-[40%] mt-2 md:-mt-24' src="https://changachanga-pink.vercel.app/static/media/about.58122ee5a58eabb728e3.png" alt="" />
                </div>
                <div className="py-8 flex flex-col">
                    <p className="text-primary uppercase font-medium text-[15px]">about the system</p>
                    <p className="text-[24px] text-black font-semibold tracking-wider capitalize">about flexirewards</p>
                    <div className="flex w-full gap-4 flex-col md:flex-row mt-4 ">
                        <div className="flex flex-col w-full md:w-[50%] gap-4">
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>

                        </div>
                        <div className="flex flex-col w-full md:w-[50%] gap-4">
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>
                            <p className="text-gray-600 text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam necessitatibus nihil error praesentium optio fugit quibusdam ea dolore molestiae, commodi incidunt explicabo ipsa quo perferendis provident beatae aperiam blanditiis.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About