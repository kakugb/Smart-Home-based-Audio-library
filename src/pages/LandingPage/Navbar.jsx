import React, { useState,useEffect } from 'react'

import headphone from '../../assests/headphone.jpeg'
import {Navbar,Collapse,Typography,Button,IconButton} from "@material-tailwind/react"
import { Link } from 'react-router-dom';

import 'reactjs-popup/dist/index.css';
import { Signup } from './Signup';
import { Login } from './Login';
function Navbars() {
    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
    return (
    <div className="mt-1  max-h-[768px] ">
       
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className='w-20'>
            <img src={headphone} alt="BigCo Inc. logo" className='rounded-full'/>
            </div>
          <div className="flex items-center gap-4">
            
          <div class=" sm:flex items-center gap-x-6 hidden  ">
    <Login/>
    <Signup/>
</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
  <div className="flex items-center gap-x-1  ">
    <Login/>
    <Signup/>
  </div>
</Collapse>
      </Navbar>


      <div className="w-full">
      <img
      className="h-[450px] w-full rounded"
      src="https://wallpaperset.com/w/full/c/1/2/466994.jpg"
      alt="Hero Section "
    />
      
     
      </div>

      
    </div>
  );

}

export default Navbars