import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

// const skills = ["Html", "CSS", "javascript", "React.js"];

const isResume = true;
const Profile = () => {
  useGetAppliedJobs();
  const [open,setOpen] = useState(false);
  const {user} = useSelector(store=>store.auth);

  

  return (
    <div>
      <Navbar />
      <div
        className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-7 p-5 mt-16 px-4 md:px-20
        "
        style={{
          marginLeft: "270px",
          marginTop: "150px",
          //   marginRight: "auto",
        }}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
                style={{
                  height: "80px", // Adjust the size as needed
                  width: "80px",
                  borderRadius: "50%", // Makes it circular
                  objectFit: "cover", // Ensures the image fits well
                  border: "2px solid #ccc",
                }}
              />
            </Avatar>

            <div>
              <h1 className="text-xl font-medium">{user?.fullname}</h1>
              <p>
              {user?.profile?.bio}
              </p>
            </div>
          </div>

          <Button  onClick= {()=> setOpen(true)}  className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>

        <div className=" my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div>
          <h4>Skills</h4>
          <div className="flex items-center gap-1">
            { user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="hover:underline "
            >
           {user?.profile?.resumeOriginalName} 
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>









      </div>


      <div className="max-w-4xl mx-auto bg-white rounded-2xl pl-10"
      style={{
        marginLeft:"230px"
      }}>
    <h4 className="font-bold text-lg my-5">Applied Jobs</h4>
    <AppliedJobTable/>
</div>

<UpdateProfileDialog open  ={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
