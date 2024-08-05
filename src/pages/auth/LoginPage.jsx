import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/flexi_logo_amber.svg';
import { ClipLoader } from 'react-spinners';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://3.136.169.137/api/v1/auth/merchant-signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('access_token', data.token);
                localStorage.setItem('merchant_id', data.merchant.id);
                navigate('/merchant/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex border bg-gray-100 items-center justify-center min-h-screen">
            <div className="w-full md:w-[55%] bg-white h-fit rounded-md flex flex-col md:flex-row">
                <div className="hidden md:flex w-full md:w-[50%] justify-center items-center ">
                    <img src={logo} alt="Illustration" />
                </div>
                <div className="bg-white p-8 rounded-lg w-full md:w-[50%]">
                    <div className="text-center mb-2">
                        <h1 className="text-[20px] font-medium text-black">Sign In</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[14px] text-black">Email <span className='text-primary '>*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="block text-[14px] text-black">Password<span className='text-primary '>*</span></label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
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
                        <div className="mb-1">
                            <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-primary">
                                {loading ? <ClipLoader color="#fff" size={20} /> : 'Log in'}
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 text-start mb-1">Don't have an account? <Link to='/merchant/sign-up' className="text-primary">Sign Up</Link></p>
                    </form>
                    {/* <p className="text-sm text-gray-700 text-end">Forgot your password? <Link to='/request-password-reset' className="text-primary">Reset it here</Link></p> */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
