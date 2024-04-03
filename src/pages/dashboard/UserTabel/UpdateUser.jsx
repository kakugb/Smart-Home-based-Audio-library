import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const UpdateUser = () => {
    const { id } = useParams();
    const navigate =useNavigate()
    const [userData, setUserData] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`);
                
                if (response.status === 200) {
                    const data = response.data.edit;
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [id]);


    const handleInputChange = e => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/user/${id}`, userData);
            if (response.status === 200) {
                console.log('User updated successfully');
                navigate('/dashboard/home')

            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };
    return (
        <div className="w-full max-w-xs grid mx-auto mt-16">
            <h1 className='text-3xl font-bold mb-6 text-center'>Update User</h1>
            <form className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text"
                        name="name"
                        value={userData.name}
                        placeholder="Username"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        type="email" 
                        name="email"
                        value={userData.email}
                        placeholder="abc@gmail.com"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;
