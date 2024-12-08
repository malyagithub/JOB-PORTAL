import React, { useEffect, useState } from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from 'axios';
import { setLoading } from "@/redux/authslice";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { Eye, EyeOff } from "lucide-react"; 
import { motion } from "framer-motion";



const signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });









  const{loading,user} = useSelector(store => store.auth);

const navigate = useNavigate();
const dispatch = useDispatch();




const [passwordVisible, setPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};







  // Event handler for input changes
  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // Event handler for file input changes
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput((prevInput) => ({
      ...prevInput,
      file,
    }));
  };

  const submitHandler = async (e)=>{
    e.preventDefault();
const formData = new FormData();
formData.append("fullname",input.fullname);
formData.append("email",input.email);
formData.append("phoneNumber",input.phoneNumber);
formData.append("password",input.password);
formData.append("role",input.role);
if(input.file){
  formData.append("file",input.file);
}





  try {
    dispatch(setLoading(true));
    const res= await axios.post(`${USER_API_END_POINT}/register`, formData,{
      headers:{
        'Content-Type':"multipart/form-data"
      },
      withCredentials:true,

    });
if(res.data.success){
  navigate("/login");
  toast.success(res.data.message);
}
  } catch (error) {
    console.log(error);
    if (error.response) {
      // If the error contains a response, display the message from the server
      toast.error(error.response.data.message || "An error occurred during registration");
    } else {
      // If no response is received (network issues, etc.), show a generic error message
      toast.error("Network Error");
    }
  }
  finally{
    dispatch(setLoading(false));

  }
  };

  useEffect(()=>{if(user){
    navigate("/");
  }

  })

  return (
    <div>
      <Navbar />
      <main className="bg-gradient-to-r from-[#2D3748] via-[#B5B5B5] to-black h-screen w-screen flex items-center justify-center p-4">
  {/* Grid Container */}
  <div className="grid   bg-gradient-to-r from-white via-gray-300 to-black w-full max-w-8xl h-auto md:h-[550px] grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg overflow-hidden">
    {/* Left Section */}
    <div className="flex items-center justify-center bg-gray-200 p-6">
      <motion.h2 className="text-4xl font-bold text-gray-900 text-center my-8 p-4 
       bg-black text-transparent 
      bg-clip-text shadow-lg rounded-lg"
      
      initial={{ opacity: 0, y: -50 }} // Start invisible and slightly above
      animate={{ opacity: 1, y: 0 }}  // Fade in and move to position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      
      
      >
        Join the Talent Workforce Today!
        </motion.h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between mt-10 items-center">
            



            
          <motion.h1
      className="text-2xl font-bold text-center text-white
      shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }} // Initial: faded out and slightly smaller
      animate={{ opacity: 1, scale: 1 }}  // Animate: fully visible and normal size
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth and fast
      whileHover={{
        scale: 1.1,               // Slightly enlarges on hover
        rotate: 2,                // Adds a small rotation
        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", // Glowing text effect
      }}
    >
      SignUp
    </motion.h1>
            <form
             onSubmit={submitHandler}
              className="w-full mt-2 border-gray-200 rounded-md p-4 my-10 max-w-sm"
            >
              <div className="my-2">
                <Label className='text-black font-bold text-l'>Full Name</Label>
                <Input type="text" 
                value ={input.fullname}
                name='fullname'
                onChange = {changeEventHandler}
                placeholder=" Full Name" 
                />
              </div>
              <div className="my-2">
                <Label className='text-black font-bold text-l'>Email</Label>
                <Input type="text"
                value ={input.email}
                name='email'
                onChange = {changeEventHandler}
                placeholder="@gmail.com" />
              </div>
              <div className="my-2">
                <Label className='text-black font-bold text-l'>Phone Number</Label>
                <Input 
                 type='text'
                value ={input.phoneNumber}
                name='phoneNumber'
                onChange = {changeEventHandler}
                placeholder="Phone number" />







              </div>
              <div className="my-2">
                <Label className='text-black font-bold text-l'>Password</Label>
                <Input 
                type={passwordVisible ? "text" : "password"}
                value ={input.password}
                name='password'
                onChange = {changeEventHandler}
                
                placeholder="Password" />





                {/* Toggle Eye Icon */}
<div style={
  {
    marginRight:'200px',
    marginTop:'270px'
  }
}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <RadioGroup className="flex items-center gap-4 my-5 ">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"


                      checked ={input.role === 'student'}
                      onChange ={changeEventHandler}
                      className="cursor-pointer  appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                    />
                    <Label
                      htmlFor="r1"
                      className="cursor-pointer text-gray-700 hover:text-gray-800 transition-colors text-white"
                    >
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"

                      checked ={input.role === 'recruiter'}
                      onChange ={changeEventHandler}
                      className="cursor-pointer appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                    />
                    <Label
                    
                      htmlFor="r2"
                      className="cursor-pointer text-gray-700 hover:text-gray-800 transition-colors text-white"
                    >
                      Recuriter
                    </Label>
                  </div>
                </RadioGroup>
                <div className="flex items-center gap-2 ml-3 ">
                  <Label className='text-white'> Profile</Label>
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    className="cursor-pointer w-64 p-2"
                  />
                </div>
              </div>

              {


loading ? <Button className="w-full my-4 " > <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:
<Button type="submit" className=" w-full px-6 py-3  text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out focus:ring-2 focus:ring-gray-400 focus:ring-offset-2" >Signup</Button>
              }

              
              <span className="text-white text-sm">Already have an account? <Link to="/login" className="text-white hover:text-gray-800 underline ml-1 transition duration-200">Login</Link></span>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default signup;
