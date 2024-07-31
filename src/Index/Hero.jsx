import React, { useState } from 'react'
import hero from '../assets/person1.png'
import paybill from '../assets/paybil-r.png'
import mobile from '../assets/mobile.png'
import limit from '../assets/limit-r.png'
import faq from '../assets/faq.png'

const faqData = [
    {
        question: 'What is Flexi?',
        answer: 'Flexi is a flexible payment system that allows you to make purchases and pay over time.',
    },
    {
        question: 'How do I sign up for Flexi?',
        answer: 'You can sign up for Flexi by visiting our website and creating an account.',
    },
    {
        question: 'Are there any fees for using Flexi?',
        answer: 'Flexi charges a small monthly fee for its services. Please refer to our pricing page for more details.',
    },
    {
        question: 'How do I make a payment?',
        answer: 'You can make payments through your Flexi account dashboard using your preferred payment method.',
    },
    {
        question: 'Can I change my payment schedule?',
        answer: 'Yes, Flexi allows you to adjust your payment schedule according to your needs. Contact our support team for assistance.',
    },
    {
        question: 'What happens if I miss a payment?',
        answer: 'If you miss a payment, you will incur a late fee. Please contact our support team to discuss your options.',
    },
    {
        question: 'Is Flexi available in my country?',
        answer: 'Flexi is available in several countries. Check our website to see if it is available in your region.',
    },
];

const Hero = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="flex w-full flex-col bg-gray-50">
            <div className='w-full flex flex-col md:flex-row px-[5%] bg-gradient-to-r from-white to-red-50 items-center gap-4 py-12'>
                <div className="flex flex-col w-full md:w-[50%] ">
                    <p className="text-black font-semibold text-[50px] ">
                        One Platform for all <br /> Financial Solutions
                    </p>
                    <p className="text-gray-600 text-[15px] font-light">
                        Empower your financial journey with advanced tools for effective and efficient money management.
                    </p>
                    <button className="w-fit bg-primary text-white font-medium text-[14px] rounded-md px-4 mt-4 py-1.5">Get started</button>
                </div>
                <div className="w-full flex items-center justify-center md:w-[50%] ">
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className="flex flex-col px-[5%] w-full py-8 bg-gradient-to-r from-white to-red-50 h-[40vh]">
                <p className="text-primary uppercase text-[14px]">A flexible solution for your payments</p>
                <p className="text-black font-medium text-[24px]">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit</p>                
            </div>
            <div className="flex w-[80%] mx-auto -mt-24 bg-gray-50 flex rounded-l-md flex-col md:flex-row h-auto">
                <div className="flex w-full md:w-[50%]">
                    <img src="https://changachanga-pink.vercel.app/static/media/home-2.0800aa60232a74eb41c5.png" className='w-fit' alt="" />
                </div>
                <div className="bg-white flex flex-col w-full md:w-[50%] px-6 py-8">
                    <p className="uppercase text-primary font-medium text-[14px]">secured innovative financial system</p>
                    <p className="ext-black text-[24px] font-medium">Say Goodbye to Mobile Recharge Hassle with ViserPay</p>
                    <p className="text-gray-600 font-light text-[14px] my-2">Our innovative money contributions system is designed to simplify and streamline the process of giving financial contributions. With our user-friendly platform, you can easily set up money raising campaigns, make one-time payments, and track your participation history all in one place. The system provides a secure and reliable way for you to contribute to your favorite causes. Experience the ease and convenience of our money raising system.</p>
                    <p className="text-gray-600 font-light text-[14px] my-2">Our innovative money contributions system is designed to simplify and streamline the process of giving financial contributions. With our user-friendly platform, you can easily set up money raising campaigns, make one-time payments, and track your participation history all in one place. The system provides a secure and reliable way for you to contribute to your favorite causes. Experience the ease and convenience of our money raising system.</p>
                    <button className="rounded-md w-fit px-4 py-1.5 bg-primary text-white font-medium text-[14px]">Learn more</button>
                </div>
            </div>
            <div className="bg-gray-50 py-8 px-[5%] flex flex-col items-center md:flex-row gap-6 w-full">
                <div className="flex flex-col w-full md:w-[50%]">
                    <p className="uppercase text-primary font-medium text-[14px]">send money</p>
                    <p className="text-black text-[24px] font-medium">Pay Your Utility Bills With Flexi</p>
                    <p className="text-gray-600 font-light text-[14px]">
                        Flexi's PayBill feature simplifies the process of paying your bills, offering a convenient and secure way to manage your financial obligations. Whether it's utility bills or other recurring payments, ViserPay's PayBill feature ensures a hassle-free experience.
                    </p>
                </div>
                <div className="flex w-full md:w-[50%]">
                    <img src={paybill} className='w-fit' alt="" />
                </div>
            </div>
            <div className="bg-gray-50 py-8 px-[5%] flex flex-col items-center md:flex-row gap-6 w-full">
                <div className="flex w-full md:w-[50%]">
                    <img src={paybill} className='w-fit' alt="" />
                </div>
                <div className="flex flex-col w-full md:w-[50%]">
                    <p className="uppercase text-primary font-medium text-[14px]">send money</p>
                    <p className="text-black text-[24px] font-medium">Pay Your Utility Bills With Flexi</p>
                    <p className="text-gray-600 font-light text-[14px]">
                        Flexi's PayBill feature simplifies the process of paying your bills, offering a convenient and secure way to manage your financial obligations. Whether it's utility bills or other recurring payments, ViserPay's PayBill feature ensures a hassle-free experience.
                    </p>
                </div>                
            </div>
            <div className="flex flex-col w-full md:flex-row justify-between gap-6 py-8 bg-white px-[5%]">
                <div className="flex flex-col justify-end py-12">
                    <p className="uppercase text-primary font-medium text-[14px]">paybill</p>
                    <p className="text-black text-[24px] font-medium">Pay Your Utility Bills With Flexi</p>
                    <p className="text-gray-600 font-light text-[14px]">
                        Flexi's PayBill feature simplifies the process of paying your bills, offering a convenient and secure way to manage your financial obligations. Whether it's utility bills or other recurring payments, ViserPay's PayBill feature ensures a hassle-free experience.
                    </p>
                </div>
                <img src={mobile} className='h-[80vh] w-fit' alt="" />
                <div className="flex flex-col h-full justify-start py-12">
                    <p className="uppercase text-primary font-medium text-[14px]">bank transfer</p>
                    <p className="text-black text-[24px] font-medium">Pay Your Utility Bills With Flexi</p>
                    <p className="text-gray-600 font-light text-[14px]">
                        Flexi's PayBill feature simplifies the process of paying your bills, offering a convenient and secure way to manage your financial obligations. Whether it's utility bills or other recurring payments, ViserPay's PayBill feature ensures a hassle-free experience.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col bg-gradient-to-r from-white to-red-50 pb-8">
                <div className="flex w-full flex-col mb-4 py-12 px-[5%] bg-gray-50">
                    <p className="uppercase text-primary font-medium text-[14px]">lorem ipsum</p>
                    <p className="ext-black text-[24px] font-medium capitalize">lorem ipsum dolor sit amet</p>
                    <p className="text-gray-600 font-light text-[14px] my-2">Our innovative money contributions system is designed to simplify and streamline the process of giving financial contributions.</p>
                </div>
                <div className="w-[90%] flex flex-col md:flex-row rounded-r-md mx-auto bg-white shadow -mt-14">
                    <div className="flex w-full md:w-[50%]">
                        <img src={limit} className='w-fit' alt="" />
                    </div>
                    <div className="bg-white flex flex-col w-full md:w-[50%] px-6 py-8">
                        <p className="uppercase text-primary font-medium text-[14px]">secured innovative financial system</p>
                        <p className="ext-black text-[24px] font-medium">Say Goodbye to Mobile Recharge Hassle with ViserPay</p>
                        <p className="text-gray-600 font-light text-[14px] my-2">Our innovative money contributions system is designed to simplify and streamline the process of giving financial contributions. With our user-friendly platform, you can easily set up money raising campaigns, make one-time payments, and track your participation history all in one place. The system provides a secure and reliable way for you to contribute to your favorite causes. Experience the ease and convenience of our money raising system.</p>
                        <button className="rounded-md w-fit px-4 py-1.5 bg-primary text-white font-medium text-[14px]">Learn more</button>
                    </div>                    
                </div>
            </div>
            {/* how does it work */}
            <div className="flex flex-col py-8 px-[5%] w-full items-center justify-center">
                <p className="uppercase text-primary font-medium text-[14px]">working process</p>
                <p className="text-[20px] font-medium capitalize ">How does it work?</p>
                <div className="flex w-full gap-6 justify-between items-center mt-4">
                    <div className="flex flex-col items-center">
                        <div className="bg-red-100 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                            <p className="text-primary font-semibold text-[24px]">1</p>
                        </div>
                        <p className="font-medium text-black text-[18px]">
                            Create account
                        </p>
                        <p className="text-gray-600 font-light text-[14px] text-center">
                            Lorem ipsum dolor sit amet. A text invented to minimize the time used for typing, when you can use this placeholder.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-red-100 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                            <p className="text-primary font-semibold text-[24px]">2</p>
                        </div>
                        <p className="font-medium text-black text-[18px]">
                            Create account
                        </p>
                        <p className="text-gray-600 font-light text-[14px] text-center">
                            Lorem ipsum dolor sit amet. A text invented to minimize the time used for typing, when you can use this placeholder.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-red-100 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                            <p className="text-primary font-semibold text-[24px]">3</p>
                        </div>
                        <p className="font-medium text-black text-[18px]">
                            Create account
                        </p>
                        <p className="text-gray-600 font-light text-[14px] text-center">
                            Lorem ipsum dolor sit amet. A text invented to minimize the time used for typing, when you can use this placeholder.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-red-100 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                            <p className="text-primary font-semibold text-[24px]">4</p>
                        </div>
                        <p className="font-medium text-black text-[18px]">
                            Create account
                        </p>
                        <p className="text-gray-600 font-light text-[14px] text-center">
                            Lorem ipsum dolor sit amet. A text invented to minimize the time used for typing, when you can use this placeholder.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-full px-[5%] py-8 bg-white flex-col items-center md:flex-row">
                <div className="w-full md:w-[50%] bg-gradient-to-r from-red-50 to-white rounded-md p-4 flex flex-col" >
                    <p className="font-medium text-primary text-[14px] uppercase">faqs</p>
                    <p className="text-[20px] text-black font-medium capitalize">what are people eager to know about us</p>
                    <p className="mb-3 text-[14px] text-gray-600 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus nam, nihil voluptatibus natus odio, corporis officiis culpa suscipit facere porro quae delectus excepturi? Placeat necessitatibus dolor mollitia molestiae atque.</p>
                    <img src={faq} className='-ml-12' alt="" />
                </div>
                <div className="max-w-2xl mx-auto p-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-2 border-b border-red-100">
                            <button
                                className="w-full text-left focus:outline-none"
                                onClick={() => handleClick(index)}
                            >
                                <div className="flex justify-between items-center px-4 py-2 rounded-md transition-colors duration-300 hover:bg-red-50">
                                    <span className="text-[18px] text-black">{faq.question}</span>
                                    <span className={`text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                        ▼
                                    </span>
                                </div>
                            </button>
                            <div
                                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                style={{ maxHeight: openIndex === index ? '1000px' : '0' }}
                            >
                                <div className="bg-gray-50 p-4 transition-opacity duration-500 ease-in-out" style={{ opacity: openIndex === index ? '1' : '0' }}>
                                    <p className='text-gray-600 font-light text-[14px]'>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 md:flex-row px-[5%] py-8 w-full">
                <div className="flex w-full md:w-[50%] flex-col">
                    <p className="font-medium text-[14px] text-primary uppercase">flexi for business</p>
                    <p className="capitalize font-medium mb-2 text-black text-[20px]">automate payments for that business today!</p>
                    <p className="text-gray-600 font-light text-[14px]">
                        The diverse range of financial solutions offered by Flexi ensures fast, easy and safe transactions for your business. Make your day-to-day operations more efficient with Flexi .
                    </p>
                    <div className="flex items-center mt-4 gap-4">
                        <button className="bg-primary border-[2px] border-primary outline-none text-white text-[14px] font-medium px-4 py-1.5 rounded-md">
                            Download
                        </button>
                        <button className="border border-primary text-primary outline-none px-4 py-1.5 rounded-md">
                            Merchant login
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[50%] flex justify-center">
                    <img src={mobile} className='h-[70vh]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero