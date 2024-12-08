import React, { useState } from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { SelectContent, SelectGroup, SelectItem } from '../ui/select';
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";



const companyArray = [];









const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
const [loading, setLoading ] = useState(false);
const navigate = useNavigate();

  const {companies} = useSelector(store=>store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };



const selectChangeHandler = (value) =>{
    const selectedCompany = companies.find((company) => company?.name?.toLowerCase()=== value);
    setInput({...input,companyId:selectedCompany._id});
}


const submitHandler = async(e) =>{
    e.preventDefault();
    try {
        setLoading(true); // Set the loading state to true

        const res = await axios.post(
          `${JOB_API_END_POINT}/post`, // API endpoint
          input,                      // Payload (data to be sent)
          {
            headers: {
              'Content-Type': 'application/json', // Specify content type
            },
            withCredentials: true, // Send cookies with the request if required
          }
        );
        if(res.data.success){
            toast.success(res.data.message);
            navigate("/admin/jobs");
        }






    } catch (error) {
        toast.error(error.response.data.message); 
    }finally{
        setLoading(false);
    }
    
}




  return (
    <div>
      <Navbar />
      <div
        style={{
          marginLeft: "500px",
          marginTop: "100px",
        }}
      >





        <form onSubmit={submitHandler} className="p-8 max-w-4xl border border-gray-250 shadow-lg rounded-md">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              value={input.title}
              onChange={changeEventHandler}
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
            />
          </div>
          
          <div>
            <Label>description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
            />
          </div>

          <div>
        <Label>Requirements</Label>
        <Input
          type="text"
          name="requirements"
          value={input.requirements}
          onChange={changeEventHandler}
          className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
        />
      </div>
      <div>
        <Label>Salary</Label>
        <Input
          type="text"
          name="salary"
          value={input.salary}
          onChange={changeEventHandler}
          className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
        />
      </div>
      <div>
        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          value={input.location}
          onChange={changeEventHandler}
          className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
        />
      </div>
      <div>
        <Label>Job Type</Label>
        <Input
          type="text"
          name="jobType"
          value={input.jobType}
          onChange={changeEventHandler}
          className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
        />
      </div>
      <div>
        <Label>Experience level</Label>
        <Input
          type="text"
          name="experience"
          value={input.experience}
          onChange={changeEventHandler}
          className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
        />
      </div>
      <div>
        <Label> No Of Position</Label>
        <Input
          type="number"
          name="position"
          value={input.position}
          onChange={changeEventHandler}
          className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
        />
      </div>
{

    companies.length > 0 &&(
        <Select onValueChange={selectChangeHandler}>
            <SelectTrigger>
                <SelectValue placeholder={"Select a Company"} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {


companies.map((company)=>{
    return(
        <SelectItem value={company?.name?.toLowerCase()} >
          {company.name}
        </SelectItem>
    )
})
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


        </div>





        {


loading ? <Button className="w-full my-4 " > <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:
<Button type="submit" className=" w-full px-6 py-3  text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 
" style = {{
  marginTop:'30px',
  backgroundColor :"purple"
}}

>Post New Job</Button>
              }
{


    companies.length ===0 && <p className="text-sm text-red-600 font-bold text-center my-3">*Please register a company first , before posting a jobs </p>
}

        </form>
      </div>
    </div>
  );
};

export default PostJob;
