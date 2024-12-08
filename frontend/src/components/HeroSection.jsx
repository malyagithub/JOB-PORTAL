import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import LatestJobs from './LatestJobs';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer ",
    "FullStack Developer",
    "Machine Learning",
    "Data Analyst",
  "Software Engineer",
  "Mobile App Developer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Cybersecurity Specialist",
  "Product Manager",
  ];
  







export const HeroSection = () => {


  



  const [query,setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate =useNavigate();
  
  const searchJobHandler = () =>{
  dispatch(setSearchedQuery(query));
  navigate("/browse");
  }

  const searchJobHandlercarousel = (query) =>{
    dispatch(setSearchedQuery(query));
    navigate("/browse");
    }










  return (
    <div className='flex flex-col items-center justify-start min-h-screen text-center pt-10 px-4 md:px-28 '
    style={{ paddingLeft: '200px' }}
    >
    <div className='flex flex-col justify-center items-center gap-5 max-w-[800px]  mt-20  md:mt-[90px]'>
    <motion.span
      className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      No.1 Job Hunt Website
    </motion.span>
      <motion.h1
  className="text-4xl md:text-5xl font-bold leading-tight"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, bounce: 0.25 }}
>
  Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
</motion.h1>


<motion.p
      className="text-gray-500 text-lg"
      initial={{ opacity: 0, y: 20 }} // Start with the text faded and slightly moved down
      animate={{ opacity: 1, y: 0 }} // End with the text fully visible and in place
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      Talent Sphere connects you with top companies to help you find your dream job. Join us today and take the next step in your career!
    </motion.p>











      <div className='flex w-[40] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'> 
    
        <input
        type='text'
        placeholder='Find your dream jobs'
      
      onChange={(e) => setQuery(e.target.value)}
      
        className='outline-none border-none w-full py-2 px-4'

      
      
      />
      <Button  onClick ={searchJobHandler}  className='rounded-r-full bg-[#6A38C2] py-2 px-6 '>
        <Search className='h-5 w-5'/>
      </Button>
      </div>
    </div>





    <div className="" >
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
          category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
              <Button onClick={()=> searchJobHandlercarousel(cat)}
              
              
              variant = 'outline' className='rounded-full'>{cat}</Button>
            </CarouselItem>
          ))
          }
          <CarouselItem></CarouselItem>
        </CarouselContent>
<CarouselPrevious/>
<CarouselNext/>

      </Carousel>
    </div>


<div className='max-w-7xl   my-5 flex  flex-col justify-start min-h-scree  px-4 md:px-28'>
{

    <LatestJobs/>
}
  </div>
 
  
</div>
  )
}

export default HeroSection