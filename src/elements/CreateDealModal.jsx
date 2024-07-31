import React, { useState } from 'react';

const CreateDealModal = ({ show, onClose, onCreate }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        discount_percentage: '',
        start_date: '',
        end_date: '',
        quantity_available: '',
        terms_and_conditions: '',
    });

    if (!show) return null;

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = () => {
        onCreate(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-[90%] md:w-[50%] max-h-[90vh] overflow-y-auto">
                <p className="text-[20px] font-medium text-black text-center mb-4">{step === 1 ? 'Upload new deal' : 'Additional Details'}</p>
                <form>
                    {step === 1 ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Name</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    reauired
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="Name of this deal"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    reauired
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="More info about the deal"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    required
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="Category of deal"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    required
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="Price"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Discount Percentage</label>
                                <input
                                    type="number"
                                    name="discount_percentage"
                                    value={formData.discount_percentage}
                                    required
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="Percentage discount"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="text-primary font-medium text-[14px]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="bg-primary text-white py-1.5 px-6 rounded-md ml-2"
                                >
                                    Next
                                </button>                                
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Start Date</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    value={formData.start_date}
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">End Date</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    value={formData.end_date}
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Quantity Available</label>
                                <input
                                    type="number"
                                    name="quantity_available"
                                    value={formData.quantity_available}
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="Quantity Available"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Terms and Conditions</label>
                                <textarea
                                    name="terms_and_conditions"
                                    value={formData.terms_and_conditions}
                                    onChange={handleChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    placeholder="Terms and Conditions"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                        className="text-primary font-medium text-[14px]"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                        className="bg-primary text-white py-1.5 px-6 rounded-md ml-2"
                                >
                                    Upload
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreateDealModal;
