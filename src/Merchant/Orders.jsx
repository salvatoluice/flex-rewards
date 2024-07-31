import React, { useState } from 'react';
import { fakeOrders } from '../data';
import Layout from './Layout';
import { FaRegEye } from 'react-icons/fa';

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 12;

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = fakeOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="overflow-x-auto bg-gray-50 px-4">
        <div className="flex items-center justify-between w-full mt-2 pl-4 h-[35px] rounded-md">
          <p className="text-gray-700 font-medium text-[16px]">Orders</p>
          <div className="w-[180px] py-2 flex items-center bg-white px-2 rounded-full h-full">
            <input type="text" placeholder='Search...' className='w-[140px] px-2 h-full' />
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Order ID</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Merchant ID</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Customer ID</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Total</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Discount</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Points</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.id}</td>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.merchant_id}</td>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.customer_id}</td>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">KES {order.total}</td>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">KES {order.discount_applied}</td>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.loyalty_points}</td>
                <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">
                  <button
                    onClick={() => handleViewDetails(order)}
                    className="text-primary"
                  >
                    <FaRegEye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-start my-2">
          {[...Array(Math.ceil(fakeOrders.length / ordersPerPage)).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`w-6 h-6 flex items-centertext-center justify-center rounded-full ${currentPage === number + 1 ? 'bg-primary text-white' : 'bg-gray-50'}`}
            >
              {number + 1}
            </button>
          ))}
        </div> */}

        {showModal && selectedOrder && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[90%] md:w-1/2 max-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Order ID</span> {selectedOrder.id}</p>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Customer</span> {selectedOrder.customer_id}</p>
              <div className="flex w-full items-center justify-between">
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Total:</span> KES {selectedOrder.total}</p>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Discount Applied</span> KES {selectedOrder.discount_applied}</p>
              </div>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Loyalty Points</span> {selectedOrder.loyalty_points}</p>
              <p className="font-medium text-[18px] mt-4">Order Items</p>
              <div className="overflow-x-auto">
                <table className="min-w-full ">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Deal ID</th>
                      <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Quantity</th>
                      <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Price (KES)</th>
                      <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Discount (KES)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{item.deal_id}</td>
                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{item.quantity}</td>
                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{item.price}</td>
                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{item.discount_applied}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex w-full justify-end">
                <button
                  onClick={closeModal}
                  className="bg-primary font-medium text-[14px] text-white px-6 py-1.5 mt-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>      
    </Layout>
  );
};

export default Orders;
