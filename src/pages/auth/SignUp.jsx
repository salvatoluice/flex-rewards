import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logo from '../../assets/flexi_logo_amber.svg';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        password: '',
        business_name: '',
        business_description: '',
        business_category: '',
        business_address: '',
        business_logo: null,
    });
    const [currentStage, setCurrentStage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'business_logo') {
            setFormData({
                ...formData,
                business_logo: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleNextStage = () => {
        setCurrentStage(currentStage + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSubmit.append(key, formData[key]);
        });

        try {
            const response = await fetch('http://3.136.169.137/api/v1/auth/merchant-signup', {
                method: 'POST',
                body: formDataToSubmit,
            });

            const result = await response.json();
            if (result.success) {
                console.log(result);
                navigate('/merchant/dashboard')
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setLoading(false);
    };

    return (
        <div className="flex border bg-gray-100 items-center justify-center min-h-screen">
            <div className="w-full md:w-[55%] bg-white h-fit rounded-md flex flex-col md:flex-row">
                <div className="bg-white p-8 rounded-lg w-full md:w-1/2">
                    <div className="text-center">
                        <h1 className="text-[24px] font-semibold text-black">Create an Account</h1>
                    </div>
                    {currentStage === 1 && (
                        <form>
                            <p className="font-light text-gray-600 text-[15px] text-center -mt-1 mb-2">Personal Information</p>
                            <div className="mb-2 w-full">
                                <label htmlFor="username" className="block text-[14px] text-black">Username <span className='text-primary '>*</span></label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder='Enter username'
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="mb-2 w-full">
                                <label htmlFor="email" className="block text-[14px] text-black">Email <span className='text-primary '>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Enter email address'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="mb-2 w-full">
                                <label htmlFor="phone_number" className="block text-[14px] text-black">Phone Number <span className='text-primary '>*</span></label>
                                <input
                                    type="number"
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder='Enter phone number'
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    className=" p-2 block text-[13px] w-full border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="relative mb-1 w-full">
                                <label htmlFor="password" className="block text-[14px] text-black">
                                    Password <span className="text-primary">*</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Type your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className=" p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 top-6 flex items-center text-gray-500"
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                            <button
                                type="button"
                                className="bg-primary w-full text-white py-2 px-4 rounded-md transition duration-300 mt-4"
                                onClick={handleNextStage}
                            >
                                Next
                            </button>
                        </form>
                    )}

                    {currentStage === 2 && (
                        <form onSubmit={handleSubmit}>
                            <p className="font-light text-gray-600 text-[15px] text-center -mt-1 mb-2">Business Information</p>
                            <div className="mb-2 w-full">
                                <label htmlFor="business_name" className="block text-[14px] text-black">Business Name <span className='text-primary '>*</span></label>
                                <input
                                    type="text"
                                    id="business_name"
                                    name="business_name"
                                    placeholder='Enter business name'
                                    value={formData.business_name}
                                    onChange={handleChange}
                                    className=" p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="business_description" className="block text-[14px] text-black">Business Description <span className='text-primary '>*</span></label>
                                <textarea
                                    id="business_description"
                                    name="business_description"
                                    placeholder='Enter business description'
                                    value={formData.business_description}
                                    onChange={handleChange}
                                    className=" p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="mb-2 w-full">
                                <label htmlFor="business_category" className="block text-[14px] text-black">Business Category <span className='text-primary '>*</span></label>
                                <input
                                    type="text"
                                    id="business_category"
                                    name="business_category"
                                    placeholder='Enter business category'
                                    value={formData.business_category}
                                    onChange={handleChange}
                                    className=" p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="mb-2 w-full">
                                <label htmlFor="business_address" className="block text-[14px] text-black">Business Address <span className='text-primary '>*</span></label>
                                <input
                                    type="text"
                                    id="business_address"
                                    name="business_address"
                                    placeholder='Enter business address'
                                    value={formData.business_address}
                                    onChange={handleChange}
                                    className=" p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="business_logo" className="block text-[14px] text-black">Business Logo <span className='text-primary '>*</span></label>
                                <input
                                    type="file"
                                    id="business_logo"
                                    name="business_logo"
                                    onChange={handleChange}
                                    className=" p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    required
                                />
                            </div>
                            <div className="flex items-center w-full gap-2">
                                <button
                                    type="submit"
                                    className="bg-primary w-full text-white py-2 px-4 rounded-md transition duration-300"
                                >
                                    {loading ? <ClipLoader color="#fff" /> : 'Submit'}
                                </button>
                            </div>
                        </form>
                    )}

                    {currentStage === 2 && (
                        <p className="text-[14px] text-gray-700 text-end font-light text-start mt-2 mb-1">
                            Already have an account? <Link to='/merchant/sign-in' className="text-primary">Sign In</Link>
                        </p>
                    )}
                </div>
                <div className="w-1/2 hidden md:flex items-center justify-center">
                    <img src={logo} alt="Sign Up Illustration" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
