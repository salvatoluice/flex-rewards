import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('access_token');
            const merchantId = localStorage.getItem('merchant_id');

            if (token && merchantId) {
                try {
                    const response = await fetch(`/merchant/get`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    const data = await response.json();

                    if (response.ok) {
                        setUser(data.merchant); // Assuming the merchant data is in the 'merchant' field
                    } else {
                        console.error('Failed to fetch user data:', data.message);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
