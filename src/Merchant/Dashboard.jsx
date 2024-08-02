import React, { useContext } from 'react'
import Layout from './Layout'
import { orders } from '../data'
import { UserContext } from '../context/AuthContext'

const Dashboard = () => {
    const { user } = useContext(UserContext)
  return (
    <Layout>
        <div className="flex border-b w-full border-gray-300 mb-4">
            <p className="text-[14px] text-gray-600 ">Hello, <span className="text-black font-medium">{user?.username}</span></p>
        </div>
        <div className="w-full mb-4 flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col p-4 rounded-md gap-2 bg-primary">
                <p className="text-white font-light text-[14px] capitalize">received orders</p>
                <hr />
                <p className="text-white text-[22px] font-medium">23</p>
            </div>
              <div className="w-full flex flex-col p-4 rounded-md gap-2 bg-red-500">
                  <p className="text-white font-light text-[14px] capitalize">delivered orders</p>
                  <hr />
                  <p className="text-white text-[22px] font-medium">0</p>
              </div>
        </div>
        <div className="flex mb-4 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                <p className="text-gray-600 text-[14px] font-medium">Deals</p>
                <hr />
                <p className="text-gray-700 text-[20px] font-medium">43</p>
            </div>
              <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                  <p className="text-gray-600 text-[14px] font-medium">Orders</p>
                  <hr />
                  <p className="text-gray-700 text-[20px] font-medium">43</p>
              </div>
              <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                  <p className="text-gray-600 text-[14px] font-medium">Deals</p>
                  <hr />
                  <p className="text-gray-700 text-[20px] font-medium">43</p>
              </div>
              <div className="p-4 bg-white rounded-md flex flex-col gap-2">
                  <p className="text-gray-600 text-[14px] font-medium">Deals</p>
                  <hr />
                  <p className="text-gray-700 text-[20px] font-medium">43</p>
              </div>
        </div>
          <div className="overflow-x-auto bg-gray-50 h-full px-4">
            <div className="flex items-center justify-between w-full mt-2 pl-4 h-[35px] rounded-md">
                <p className="text-gray-600 text-[14px]">Latest</p>
                <div className="w-[170px] flex items-center bg-white border px-2 rounded-md h-full ">
                    <input type="text" placeholder='Search...' className='w-[140px] h-full' />
                </div>
            </div>
              <table className="min-w-full ">
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
    </Layout>
  )
}

export default Dashboard