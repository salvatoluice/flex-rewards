import React from 'react';

const DealDetailsModal = ({ show, deal, onClose }) => {
    if (!show || !deal) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        let formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

        // Add ordinal suffix
        const day = date.getDate();
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
            (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

        // Combine formatted date and suffix
        return formattedDate.replace(/(\d+)(st|nd|rd|th)/, `${day}${suffix}`);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-[90%] md:w-[45%] max-h-[90vh] overflow-y-auto">
                <h2 className="text-[20px] font-medium mb-4 text-center">Details</h2>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Title</span> {deal.title}</p>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Description</span> {deal.description}</p>
                <div className="flex w-full items-center justify-between">
                    <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Category</span> {deal.category}</p>
                    <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Price</span> Kes {deal.price}</p>
                </div>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Percentage discount</span> {deal.discount_percentage}%</p>
                <div className="flex items-center w-full justify-between">
                    <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'>
                        <span className='text-gray-700 font-medium text-[14px]'>Start Date</span>
                        {formatDate(deal.start_date)}
                    </p>
                    <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'>
                        <span className='text-gray-700 font-medium text-[14px]'>End Date</span>
                        {formatDate(deal.end_date)}
                    </p>
                </div>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Quantity Available</span> {deal.quantity_available}</p>
                <p className='flex flex-col mb-3 text-gray-600 font-light text-[13px]'><span className='text-gray-700 font-medium text-[14px]'>Terms and Conditions</span> {deal.terms_and_conditions}</p>
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-primary text-[14px] font-medium text-white py-1.5 px-6 rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DealDetailsModal;
