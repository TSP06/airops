import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = ({ token,removingtoken }) => {
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/admin', {
                    headers: { 'Authorization': token }
                });
               
            } catch (error) {
                console.error('Error fetching flights:', error);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div>
            <h1>Admin Panel</h1>
           <button onClick={removingtoken}>
            Logout
           </button>
        </div>
    );
};

export default Admin;

