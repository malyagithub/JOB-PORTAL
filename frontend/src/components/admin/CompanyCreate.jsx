import React, { useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/label';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';
import axios from 'axios';
import { toast } from 'sonner';


const CompanyCreate = () => {

    const navigate = useNavigate();
const [companyName,setCompanyName] = useState();
const dispatch =useDispatch();


    const registerNewCompany = async ()=>{
      if (!companyName) {
        toast.error("Company name cannot be empty.");
        return;
    }
        try {
          // console.log(`${COMPANY_API_END_POINT}/get/:id`);
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers: {
                    "Content-Type": "application/json",
                  },
                  withCredentials: true, // Correct placement
                }
              );


        if(res?.data?.success){
         
            dispatch(setSingleCompany(res.data.company));
            toast.success(res.data.message);

            const companyId = res?.data?.company?._id;


            if (companyId) {
              navigate(`/admin/companies/${companyId}`);
          } else {
              toast.error("Invalid company ID returned from server.");
          }
            // console.log(companyId);
            // navigate(`/admin/companies/${companyId}`);
            
        }




        } catch (error) {
            console.log(error);
        }
    }
    return (
    <div>

<Navbar/>
<div className="max-w-4xl mx-auto" 
style={{
    marginTop:"150px",
    marginLeft:"200px"
}}>
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? You can change this later.
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt, Microsoft etc."
          onChange = {(e) =>setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button variant="outline" onClick={() => navigate("/admin/companies")}>
            Cancel
          </Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>


    </div>
  )
}

export default CompanyCreate