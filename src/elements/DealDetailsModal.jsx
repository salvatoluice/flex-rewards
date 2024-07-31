import React from 'react';

const DealDetailsModal = ({ show, deal, onClose }) => {
    if (!show || !deal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Deal Details</h2>
                <p><strong>ID:</strong> {deal.id}</p>
                <p><strong>Merchant ID:</strong> {deal.merchant_id}</p>
                <p><strong>Title:</strong> {deal.title}</p>
                <p><strong>Description:</strong> {deal.description}</p>
                <p><strong>Category:</strong> {deal.category}</p>
                <p><strong>Price:</strong> ${deal.price}</p>
                <p><strong>Discount Percentage:</strong> {deal.discount_percentage}%</p>
                <p><strong>Start Date:</strong> {deal.start_date}</p>
                <p><strong>End Date:</strong> {deal.end_date}</p>
                <p><strong>Quantity Available:</strong> {deal.quantity_available}</p>
                <p><strong>Terms and Conditions:</strong> {deal.terms_and_conditions}</p>
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DealDetailsModal;
