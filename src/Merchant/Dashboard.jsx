import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout'
import { orders } from '../data'
import { UserContext } from '../context/AuthContext'
import Analytics from './Analytics'
import SalesChart from './SalesChart'

const Dashboard = () => {
    const { user } = useContext(UserContext)
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcAnalytics = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('access_token');
                const merchant_id = localStorage.getItem('merchant_id');

                const response = await fetch('http://3.136.169.137/api/v1/merchant/get-stats', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ merchant_id }),
                });


                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setStats(data);
                } else {
                    console.error('Failed to fetch stats:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetcAnalytics();
    }, []);
    return (
        <Layout>
            <div className="flex flex-col w-full  h-[90vh]">
                <div className="flex flex-col flex-grow overflow-y-auto">
                    <div className="flex border-b w-full border-gray-300 mb-4">
                        <p className="text-[14px] text-gray-600 ">Hello, <span className="text-black font-medium">{user?.username}</span></p>
                    </div>
                    <div className="w-full mb-4 flex flex-col md:flex-row gap-4">
                        <div className="w-full flex flex-col p-4 rounded-md gap-2 bg-primary">
                            <p className="text-white font-light text-[14px] capitalize">Total Sales</p>
                            <hr />
                            <p className="text-white text-[22px] font-medium">{stats?.totalSales}</p>
                        </div>
                        <div className="w-full flex flex-col p-4 rounded-md gap-2 bg-red-500">
                            <p className="text-white font-light text-[14px] capitalize">Monthly Average</p>
                            <hr />
                            <p className="text-white text-[22px] font-medium">45, 000</p>
                        </div>
                    </div>
                    <div className="flex mb-4 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                            <p className="text-gray-600 text-[13px]">Deliverd</p>
                            <hr />
                            <p className="text-black text-[20px] font-medium">{stats?.deliveredOrders}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                            <p className="text-gray-600 text-[13px]">Pending</p>
                            <hr />
                            <p className="text-gray-700 text-[20px] font-medium">{stats?.pendingOrders}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                            <p className="text-gray-600 text-[13px]">Deals</p>
                            <hr />
                            <p className="text-gray-700 text-[20px] font-medium">{stats?.totalDeals}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                            <p className="text-gray-600 text-[13px]">Cleared</p>
                            <hr />
                            <p className="text-gray-700 text-[20px] font-medium">26</p>
                        </div>
                    </div>
                    <SalesChart />
                    <div className="h-auto">
                        <div className="flex-grow rounded-md overflow-x-auto bg-gray-50 px-4">
                            <div className="flex items-center justify-between w-full mt-2 pl-4 h-[35px] rounded-md">
                                <p className="text-gray-600 text-[14px]">Latest</p>
                                <div className="w-[170px] flex items-center bg-white border px-2 rounded-md h-full ">
                                    <input type="text" placeholder='Search...' className='w-[140px] h-full' />
                                </div>
                            </div>
                            <table className="min-w-full h-full">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Order ID</th>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Customer</th>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Deal</th>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Quantity</th>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Price</th>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Date</th>
                                        <th className="py-2 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order.id}>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.id}</td>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.customer}</td>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.product}</td>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.quantity}</td>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.price}</td>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.date}</td>
                                            <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard