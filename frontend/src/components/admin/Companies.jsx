import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
  useGetAllCompanies();



const [input,setInput] = useState("");
    const navigate = useNavigate();
const dispatch = useDispatch    ();


useEffect(() =>{
dispatch(setSearchCompanyByText(input));
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
          placeholder="Filter by name" 

onChange ={(e) => setInput(e.target.value)}


        />
        <Button  onClick={()  => navigate("/admin/companies/create")}
        style={{
            marginLeft :"750px"
        }}
        >New Company</Button>
      </div>
      <CompaniesTable />
    </div>
    </div>
  )
}

export default Companies