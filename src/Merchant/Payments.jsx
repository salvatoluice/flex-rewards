import React from 'react';
import { ClipLoader } from 'react-spinners';
import Layout from './Layout';

const Payments = ({ payments, loading }) => {
  return (
    <Layout>
      <div className="flex w-full mb-4 justify-between items-center">
        <p
          className="text-black font-medium text-[20px]"
        >
          Payments
        </p>
        <div className="w-[180px] py-2 flex items-center bg-white px-2 rounded-full h-full">
          <input type="text" placeholder='Search...' className='outline-none text-[14px] font-light text-gray-600 w-[140px] px-2 h-full' />
        </div>
      </div>
      <div className="overflow-x-auto bg-gray-50 px-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Transaction ID</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Customer Name</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Order ID</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Amount</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Date Time</th>
              <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-4">
                  <div className="flex justify-center items-center">
                    <ClipLoader color="#4B5563" size={25} />
                  </div>
                </td>
              </tr>
            ) : (
              payments.map(payment => (
                <tr key={payment.transactionId}>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{payment.transactionId}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{payment.customerName}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{payment.orderId}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">KES {payment.amount}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{payment.dateTime}</td>
                  <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{payment.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Payments;
