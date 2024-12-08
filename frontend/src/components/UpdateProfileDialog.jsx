import { DialogContent, DialogFooter, DialogTitle } from "./ui/dialog";
import { Dialog, DialogHeader } from "./ui/dialog";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authslice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store =>store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),

    file: user?.profile?.resume,
  });


  const dispatch = useDispatch();

const changeEventHandler = (e) =>{
    setInput({...input,[e.target.name] :e.target.value});
}

const fileHandler = (e) =>{ 
    const file = e.target.files?.[0];
    setInput({...input,file})
}




const submitHandler = async(e)=>{

    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills); // Join skills array into a comma-separated string
  
    if (input.file) {
      formData.append("file", input.file); // Append file only if it exists
    }

    try {
        setLoading(true);
        const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            },
            withCredentials :true
        });

        if(res.data.success){
            dispatch(setUser(res.data.user));
            toast.success(res.data.message);


        }
        
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }finally{
        setLoading(false);
    }


setOpen(false);

    console.log(input);
    

}



  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>

          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 itemscenter gap-4">
                <Label htmlFor="name " className="text-right pt-2">
                  Name:
                </Label>
                <Input
                  id="name"
                  name="name"
                  type= "text"
                  value={input.fullname}
                  onChange = {changeEventHandler}
                  className="col-span-3 "
                ></Input>
              </div>

              <div className="grid grid-cols-4 itemscenter gap-4">
                <Label htmlFor="email " className="text-right pt-2">
                  Email:
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange = {changeEventHandler}
                  className="col-span-3 "
                ></Input>
              </div>

              <div className="grid grid-cols-4 itemscenter gap-4">
                <Label htmlFor="number" className="text-right pt-2">
                  Number:
                </Label>
                <Input
                  id="number"
                  name="number"
                  value={input.phoneNumber}
                  onChange = {changeEventHandler}
                  className="col-span-3 "
                ></Input>
              </div>

              <div className="grid grid-cols-4 itemscenter gap-4">
                <Label htmlFor="bio" className="text-right pt-2">
                  Bio:
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange = {changeEventHandler}
                  className="col-span-3 "
                ></Input>
              </div>

              <div className="grid grid-cols-4 itemscenter gap-4">
                <Label htmlFor="skills " className="text-right pt-2">
                  Skills:
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange = {changeEventHandler}
                  className="col-span-3 "
                ></Input>
              </div>

              <div className="grid grid-cols-4 itemscenter gap-4">
                <Label htmlFor="file " className="text-right pt-2">
                  Resume:
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept=" application/docx"
                  
                  onChange ={fileHandler}
                  className="col-span-3 "
                ></Input>
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4 ">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className=" w-full px-6 py-3  text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
