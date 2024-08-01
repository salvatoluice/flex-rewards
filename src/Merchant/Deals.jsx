import React, { useState, useEffect } from 'react';
import CreateDealModal from '../elements/CreateDealModal';
import DealDetailsModal from '../elements/DealDetailsModal';
import Layout from './Layout';
import { FaRegEye } from 'react-icons/fa';
import { IoAddSharp } from 'react-icons/io5';

const Deals = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [deals, setDeals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dealsPerPage = 12;

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const merchant_id = localStorage.getItem('merchant_id');

                const response = await fetch('http://3.136.169.137/api/v1/deals/list-deals', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ merchant_id }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setDeals(data.deals || []);
                } else {
                    console.error('Failed to fetch deals:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching deals:', error);
            }
        };

        fetchDeals();
    }, []);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastDeal = currentPage * dealsPerPage;
    const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
    const currentDeals = deals.slice(indexOfFirstDeal, indexOfLastDeal);

    const handleViewDetails = (deal) => {
        setSelectedDeal(deal);
        setShowDetailsModal(true);
    };

    const handleCreateDeal = async (dealData) => {
        try {
            const token = localStorage.getItem('access_token');
            const merchant_id = localStorage.getItem('merchant_id');

            const formData = new FormData();
            formData.append('merchant_id', merchant_id);
            formData.append('title', dealData.title);
            formData.append('description', dealData.description);
            formData.append('category', dealData.category);
            formData.append('price', dealData.price);
            formData.append('discount_percentage', dealData.discount_percentage);
            formData.append('start_date', dealData.start_date);
            formData.append('end_date', dealData.end_date);
            formData.append('quantity_available', dealData.quantity_available);
            formData.append('terms_and_conditions', dealData.terms_and_conditions);
            if (dealData.image) formData.append('image', dealData.image);

            const response = await fetch('http://3.136.169.137/api/v1/deals/create-deals', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                const newDeal = await response.json();
                setDeals([newDeal, ...deals]); // Add the new deal to the existing deals
                setShowCreateModal(false);
            } else {
                console.error('Failed to create deal:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating deal:', error);
        }
    };

    return (
        <Layout>
            <div className="">
                <div className="flex w-full mb-4 justify-between items-center">
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="bg-primary flex items-center gap- text-white py-1.5 text-[14px] px-4 rounded"
                    >
                        <IoAddSharp size={20} /> Create Deal
                    </button>
                    <div className="w-[180px] py-2 flex items-center bg-white px-2 rounded-full h-full">
                        <input type="text" placeholder='Search...' className='w-[140px] px-2 h-full' />
                    </div>
                </div>
                <div className="overflow-x-auto bg-gray-50 px-4">
                    <div className="flex items-center justify-between w-full mt-2 pl-4 h-[35px] rounded-md">
                        <p className="text-gray-700 font-medium text-[16px]">Deals</p>
                    </div>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">ID</th>
                                <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Title</th>
                                <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Category</th>
                                <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Price</th>
                                <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Discount</th>
                                <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDeals.map(deal => (
                                <tr key={deal.id}>
                                    <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{deal.id}</td>
                                    <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{deal.title}</td>
                                    <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{deal.category}</td>
                                    <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">Kes. {deal.price}</td>
                                    <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{deal.discount_percentage}%</td>
                                    <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">
                                        <button
                                            onClick={() => handleViewDetails(deal)}
                                            className="text-primary"
                                        >
                                            <FaRegEye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-start items-center mt-2">
                    {[...Array(Math.ceil(deals.length / dealsPerPage)).keys()].map((number) => (
                        <button
                            key={number + 1}
                            onClick={() => paginate(number + 1)}
                            className={`mx-1 px-4 py-2 rounded ${currentPage === number + 1 ? 'bg-primary text-white' : 'bg-gray-50'}`}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>

                <CreateDealModal
                    show={showCreateModal}
                    onClose={() => setShowCreateModal(false)}
                    onCreate={handleCreateDeal}
                />
                <DealDetailsModal
                    show={showDetailsModal}
                    deal={selectedDeal}
                    onClose={() => setShowDetailsModal(false)}
                />
            </div>
        </Layout>
    );
};

export default Deals;
