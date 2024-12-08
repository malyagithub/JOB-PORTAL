import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import {setSearchJobByText} from '@/redux/jobSlice'
const AdminJobs = () => {

useGetAllAdminJobs();


const [input,setInput] = useState("");
    const navigate = useNavigate();
const dispatch = useDispatch    ();


useEffect(() =>{
dispatch(setSearchJobByText(input));
},[input]);






  return (
    <div>
    <Navbar/>
    <div className="max-w-6xl mx-auto my-10 "
    style={{
        marginTop: "100px"
    }}>
      <div className=" flex items-center my-5  "
      style={{
       
        marginLeft:"100px"
      }}>
        <Input 
          className="w-fit" 
          placeholder="Filter by name ,role" 

onChange ={(e) => setInput(e.target.value)}


        />
        <Button  onClick={()  => navigate("/admin/jobs/create")}
        style={{
            marginLeft :"750px"
        }}
        >New Jobs</Button>
      </div>
      <AdminJobsTable/>
    </div>
    </div>
  )
}

export default  AdminJobs