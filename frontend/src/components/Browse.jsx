import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import Job from './Job';
import Footer from './ui/shared/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';








// const randomJobs = [1,2,3];



const Browse = () => {
useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch =useDispatch();

    useEffect(()=>{
        return()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
  return (
    <div>
<Navbar/>

<div className="max-w-7xl mx-auto my-5 pl-[30vh]"
>
    <h1 className='text-lg font-bold  text-xl text-gray-700 pt-20  '
    style={{
       marginTop:"20px"
    }}

    >Search Results ({allJobs.length})</h1>


<div className='grid grid-cols-3 gap-4 mt-3'>
{
        allJobs.map((job)=>{
            return(
                <Job key={job._id} job={job}/>
            )
        })
    }

</div>




   
</div>



<Footer/>
    </div>
  )
}

export default Browse