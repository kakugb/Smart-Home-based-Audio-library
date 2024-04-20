import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowAllUser = () => {
    const [users, setUsers] = useState([]);
    const [singleUser,setSingleUser]=useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      FetchAllusers();
    }, []);
  
  
   
    const FetchAllusers =()=>{
      axios.get('https://audio.globillmedicalresources.com/public/api/users')
      .then(response => {
        
        setUsers(response);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
    }
  
    const handleDeleteUser = (userId) => {
      axios.delete(`https://audio.globillmedicalresources.com/public/api/user/${userId}`)
        .then(response => {
         FetchAllusers()
         toast.success('User deleted successfully!')
          
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    };
  
  
    const fetchSingleUser = (userId) => {
      console.log(userId)
      axios.get(`https://audio.globillmedicalresources.com/public/api/user/${userId}`)
        .then(response => {
          setSingleUser(response.data);
        
        })
        .catch(error => {
          console.error('Error fetching single user:', error);
        });
    };
  
    const getRoleName = (roleId) => {
      if (roleId === 1) return 'Admin';
      if (roleId === 2) return 'User';
      return 'Unknown';
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;
  return (
    <div class="container max-w-7xl mx-auto mt-8 ">
  <div>
  
    <div class="flex justify-end mb-4">
      <Link to={'/AddUser'}>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Add User
     </button>
     </Link>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-800 uppercase border-b border-gray-200 bg-gray-400">
                ID</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-800 uppercase border-b border-gray-200 bg-gray-400">
                Name</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-800 uppercase border-b border-gray-200 bg-gray-400">
                Email</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-800 uppercase border-b border-gray-200 bg-gray-400">
                Role</th>
              <th class="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-400" colspan="3">
                Action</th>
            </tr>
          </thead>

          <tbody class="bg-white">
          {users.data.users && users.data.users.map((user) => (
            <tr key={user.id}>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center text-black">
                 {user.id}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">{user.name}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{user.email}</p>
              </td>

              <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>{getRoleName(user.role_id)}</span>
              </td>

              <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
              <Link to={`/UpdateUser/${user.id}`}>
                <button class="text-indigo-600 hover:text-indigo-900" onClick={() => {fetchSingleUser(user.id)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                </Link>

              </td>
              
              <td class="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                <button  onClick={() => { handleDeleteUser(user.id)}}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600 hover:text-red-800"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg></button>

              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default ShowAllUser