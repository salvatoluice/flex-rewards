import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Layout from './Layout';
import { FaRegEye } from 'react-icons/fa';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('received');
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const ordersPerPage = 12;

  useEffect(() => {
    fetchOrders(activeTab);
  }, [activeTab]);

  const fetchOrders = async (status) => {
    setLoading(true);
    const token = localStorage.getItem('access_token');
    const merchant_id = localStorage.getItem('merchant_id');

    try {
      const response = await fetch(`http://3.136.169.137/api/v1/orders/get-${status}-orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ merchant_id, starting_id: 0 }),
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders);
      } else {
        console.error('Failed to fetch orders:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

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
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="flex items-center mt-10 md:mt-0 mb-4 border-b-2 border-gray-200">
        <button
          className={`py-2 px-4 text-[14px] ${activeTab === 'received' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
          onClick={() => setActiveTab('received')}
        >
          Received Orders
        </button>
        <button
          className={`py-2 px-4 ml-2 text-[14px] ${activeTab === 'delivered' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
          onClick={() => setActiveTab('delivered')}
        >
          Delivered Orders
        </button>
      </div>
      <div className="overflow-x-auto bg-gray-50 px-4">
        <div className="flex items-center justify-between w-full pl-4 mt-2 h-[35px] rounded-md">
          <p className="text-black font-medium text-[16px]">Orders</p>
          <div className="w-[180px] py-2 flex items-center bg-white px-2 rounded-full h-full">
            <input type="text" placeholder='Search...' className='w-[140px] px-2 h-full' />
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Order ID</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Customer</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Deal</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Total</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Discount (%)</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Loyalty Points</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[14px] border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-4">
                  <div className="flex justify-center items-center">
                    <TailSpin
                      height="25"
                      width="25"
                      color="#4B5563"
                      ariaLabel="loading"
                    />
                  </div>
                </td>
              </tr>
            ) : (
              currentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.id}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.customer.first_name} {order.customer.last_name}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.deal.title}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">KES {order.order.total}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.discount_applied}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{order.order.loyalty_points}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="text-primary"
                    >
                      <FaRegEye size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>

        <div className="flex justify-start items-center mt-2">
          {[...Array(Math.ceil(orders.length / ordersPerPage)).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-4 py-2 rounded ${currentPage === number + 1 ? 'bg-primary text-white' : 'bg-gray-50'}`}
            >
              {number + 1}
            </button>
          ))}
        </div>

        {showModal && selectedOrder && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[90%] md:w-1/3 max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Order ID</span> {selectedOrder.id}</p>
              <div className="flex w-full items-center justify-between">
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Customer</span> {selectedOrder.customer.first_name} {selectedOrder.customer.last_name}</p>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium flex text-end flex-col  text-[14px]'>Customer Email</span> {selectedOrder.customer.email} </p>
              </div>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Deal</span> {selectedOrder.deal.title}</p>
              <div className="flex items-center w-full justify-between">
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'>
                  <span className='text-gray-700 font-medium text-[14px]'>Price</span>
                  {selectedOrder.deal.price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
                </p>
                <p className='flex flex-col mb-3 text-gray-600 text-end font-light text-[13px]'>
                  <span className='text-gray-700 font-medium text-[14px]'>Discount</span>
                  {selectedOrder.deal.discount_percentage}%
                </p>
              </div>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Loyalty Points</span> {selectedOrder.order.loyalty_points}</p>
              <p className='flex flex-col mb-3 text-gray-600  font-light text-[13px]'>
                <span className='text-gray-700 font-medium text-[14px]'>Description</span>
                {selectedOrder.deal.description}
              </p>
              <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'>
                <span className='text-gray-700 font-medium text-[14px]'>Terms & conditions</span>
                {selectedOrder.deal.terms_and_conditions}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-1.5 rounded-md outline-none bg-primary text-[14px] text-white font-medium"
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
