import React, { useState } from 'react';
import { data as ticketData } from '../data.js';
import Layout from './Layout.jsx';

const Tickets = () => {
    const [activeTab, setActiveTab] = useState('table');
    const [tickets, setTickets] = useState(ticketData);
    const [formValues, setFormValues] = useState({
        userName: '',
        userId: '',
        title: '',
        description: '',
        attachment: null,
        priority: 'medium',
        status: 'open',
    });

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormValues({ ...formValues, attachment: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTicket = { ...formValues, id: tickets.length + 1 };
        setTickets([...tickets, newTicket]);
        setActiveTab('table');
    };

    return (
        <Layout>
            <div className="bg-gray-50 p-4 mt-10 md:mt-0">
                <div className="flex space-x-4 mb-4 border-b border-yellow-200">
                    <button
                        className={`text-[14px] ${activeTab === 'table' ? 'text-primary font-medium border-b-2 border-primary' : 'text-black'}`}
                        onClick={() => handleTabClick('table')}
                    >
                        View Tickets
                    </button>
                    <button
                        className={`text-[14px] ${activeTab === 'create' ? 'text-primary font-medium border-b-2 border-primary' : 'text-black'}`}
                        onClick={() => handleTabClick('create')}
                    >
                        Create Ticket
                    </button>
                </div>

                {activeTab === 'table' && (
                    <div className="overflow-x-auto bg-white px-4">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">ID</th>
                                    <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">User Name</th>
                                    <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Title</th>
                                    <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Priority</th>
                                    <th className="py-3 px-4 border-b text-gray-700 text-start font-medium text-[15px] border-gray-300">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket) => (
                                    <tr key={ticket.id}>
                                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{ticket.id}</td>
                                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{ticket.userName}</td>
                                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{ticket.title}</td>
                                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{ticket.priority}</td>
                                        <td className="py-2 px-4 border-b text-gray-600 font-light text-[13px] border-gray-200">{ticket.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'create' && (
                    <div className=" p-4 rounded-md">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center flex-col md:flex-row gap-6">
                                <div className="w-full mb-4">
                                    <label className="block text-[14px] text-black">Name</label>
                                    <input
                                        type="text"
                                        name="userName"
                                        value={formValues.userName}
                                        onChange={handleInputChange}
                                        placeholder='Your name...'
                                        className="px-2 py-1 block w-full text-[13px] bg-transparent border-b border-gray-300 focus:border-primary outline-none text-primary"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <label className="block text-[14px] text-black">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formValues.title}
                                        onChange={handleInputChange}
                                        placeholder='Title of your issue'
                                        className="px-2 py-1 block w-full text-[13px] bg-transparent border-b border-gray-300 focus:border-primary outline-none text-primary"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Description</label>
                                <textarea
                                    name="description"
                                    value={formValues.description}
                                    onChange={handleInputChange}
                                    placeholder='Describe your issue'
                                    className="px-2 py-1 block w-full text-[13px] bg-transparent border-b border-gray-300 focus:border-primary outline-none text-primary"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Attachment</label>
                                <input
                                    type="file"
                                    name="attachment"
                                    onChange={handleFileChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[14px] text-black">Priority</label>
                                <select
                                    name="priority"
                                    value={formValues.priority}
                                    onChange={handleInputChange}
                                    className="px-2 py-1 bg-transparent block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            {/* <div className="mb-4">
                                <label className="block text-[14px] text-black">Status</label>
                                <select
                                    name="status"
                                    value={formValues.status}
                                    onChange={handleInputChange}
                                    className="p-2 block w-full text-[13px] border-b border-gray-300 focus:border-primary outline-none text-primary"
                                >
                                    <option value="open">Open</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div> */}
                            <div className="flex w-full justify-end">
                                <button type="submit" className="w-fit  bg-primary text-white py-1.5 px-6 rounded-md hover:bg-primary">
                                    Submit Ticket
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Tickets;
