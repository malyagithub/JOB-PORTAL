import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import { HeroSection } from './HeroSection'
import Footer from './ui/shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  useGetAllJobs();

const {user} = useSelector(store => store.auth);
const navigate = useNavigate();
useEffect(() => {
  if(user?.role == 'recuriter'){
    navigate("/admin/companies");
  }
},[]
);




  return (
    <div>

        <Navbar/>
        <HeroSection/>
        <Footer/>
       
    </div>
  )
}

export default Home