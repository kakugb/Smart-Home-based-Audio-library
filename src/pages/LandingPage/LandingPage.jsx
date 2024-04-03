import React, { useEffect } from 'react'
import Navbars from './Navbar'
import Footer from './Footer'
import MusicCategory from './MusicCategory'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate()
  useEffect(() => {

    const token = sessionStorage.getItem("token");
    if (token) {
      
      navigate("/dashboard/home", { replace: true });
    }
  }, [navigate]);
  return (
    
    <>
    <Navbars/>
    <MusicCategory/>
    <Footer/>
    </>
  )
}

export default LandingPage