import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/Badge";
import { useNavigate } from "react-router-dom";

export const Job = ({job}) => {


  const navigate = useNavigate();
  // const jobId = "hbchwjcbdwjbcduhiu";


  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
};




  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200"
      style={{
        marginTop: "100px",
        display: "grid",
      
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "10px",
        padding: "10px",
       
      }}
    >
      <div className="flex items-center justify-between w-full mb-2  ">
        <p className="text-sm text-gray-500"> {daysAgoFunction(job?.createdAt) === 0 
    ? "Today" 
    : `${daysAgoFunction(job?.createdAt)} days ago`} </p>
        <Button variant="outline" className=" rounded-full flex items-center justify-center " size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-4 my-4">
        {/* <Button className="p-6" variant="outline" size="icon"> */}
          <Avatar className="w-12 h-12 overflow-hidden rounded-full border border-gray-300">
            <AvatarImage src={job?.company?.logo}  alt="Company logo"/>
          </Avatar>
        {/* </Button> */}

        <div>
          <h1 className="text-lg font-semibold">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-500 ">{job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700  font-bold"} variant="ghost">
        
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
         
        {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
            {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
<Button onClick = {()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
<Button className ='bg-[#7209b7]'>Save for later</Button>
</div>

    </div>
  );
};

export default Job;
