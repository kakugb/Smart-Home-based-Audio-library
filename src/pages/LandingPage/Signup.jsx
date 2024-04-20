import React, { useState } from 'react';

import axios from 'axios';
import { useMutation } from 'react-query';
import {  Button} from "@material-tailwind/react"
import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
 const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const registerUser = async () => {
    
    if (password !== confirmPassword) {
      
      toast.error("Passwords don't match !");
      return;
    }

    try {
      const response = await axios.post('https://audio.globillmedicalresources.com/public/api/register', {
        name,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      toast.success("Registration successful !");
      setTimeout(() => {
        navigate("/")
      }, 2000);
      close();
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const mutation = useMutation(registerUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <Popup trigger={
      <Button fullWidth variant="gradient" size="sm" className=" " >
      <span>Sigup</span>
    </Button>
    } modal nested>
      {(close) => (
        <div className="flex-col rounded-xl bg-white">
          <div className="relative grid px-1 py-1 m-0 overflow-hidden text-center text-white bg-gray-900 place-items-center rounded-xl bg-clip-border shadow-gray-900/20">
            <div className="w-full h-36 text-white">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2Tmld5hp2im30-8G_Roaj5BHrsSBIGyQjA&usqp=CAU" alt="login image" className="w-full h-auto" />
            </div>
            <button onClick={() => close()} className="absolute top-2 right-2 text-2xl font-bold">
              X
            </button>
          </div>
          <div className="p-6">
            <form className="flex flex-col gap-4 mt-12" onSubmit={handleSubmit}>
              <div>
                <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <div>
                <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Your Email</p>
                <input
                  type="email"
                  placeholder="name@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <div className="my-3">
                <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Password</p>
                <input
                  placeholder="********************"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <div className="my-3">
                <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Confirm Password</p>
                <input
                  placeholder="********************"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <button
              
                className="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                disabled={mutation.isLoading}
               
              >
                {mutation.isLoading ? 'Loading...' : 'Sign Up'}
              </button>
              {mutation.isError && <div>Error signing up</div>}
            </form>
          </div>
          <ToastContainer/>
        </div>
      )}
    </Popup>
  );
};
