import React, { useEffect, useState } from 'react'

const Analytics = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcAnalytics = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('access_token');
                const merchant_id = localStorage.getItem('merchant_id');

                const response = await fetch('http://3.136.169.137/api/v1/merchant/get-stats', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ merchant_id }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setStats(data.deals || []);
                } else {
                    console.error('Failed to fetch stats:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetcAnalytics();
    }, []);
  return (
    <div>Analytics</div>
  )
}

export default Analytics