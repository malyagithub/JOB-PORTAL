import React, { useEffect, useState } from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setLoading, setUser } from "@/redux/authslice";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";



const login = () => {
  const [input, setInput] = useState({
    email: "",

    password: "",
    role: "",
  });


  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };












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

  const { loading, user } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        // If the error contains a response, display the message from the server
        toast.error(
          error.response.data.message || "An error occurred during registration"
        );
      } else {
        // If no response is received (network issues, etc.), show a generic error message
        toast.error("Network Error");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div>
      <Navbar />
      <main className="bg-gradient-to-r from-[#2D3748] via-[#B5B5B5] to-black h-screen w-screen flex items-center justify-center p-4">
        {/* Grid Container */}
        <div className="grid  bg-gradient-to-r from-white via-gray-300 to-black w-full max-w-5xl h-auto md:h-[500px] grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg overflow-hidden">
          {/* Left Section */}
          <div className="flex items-center justify-center bg-gray-200 p-6">
             <motion.h2
              className="text-4xl font-bold text-gray-900 text-center my-8 p-4 
     bg-black
      bg-clip-text shadow-lg rounded-lg"

      initial={{ opacity: 0, y: -30 }} // Initial state: faded out and above
      animate={{ opacity: 1, y: 0 }}  // Final state: fully visible and in place
      transition={{
        duration: 0.8,    // Animation duration (seconds)
        ease: "easeOut",  // Smooth easing
      }}



            >
              Welcome Back! Please Log In to Continue.
              </motion.h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between items-center mt-20 mx-5 my-10">
            
          <motion.h2
        className="text-lg font-medium text-white mb-2" // Solid purple color
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Unlock Your Next Career Opportunity
      </motion.h2>


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
      Login
    </motion.h1>


            <form
              onSubmit={submitHandler}
              className="w-full mt-0 border-gray-200 rounded-md p-4  max-w-sm"
            >
              <div className="flex flex-col gap-1">
                <Label >Email</Label>
                <Input
                  type="text"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="@gmail.com"
                />
              </div>

              <div className="my-2 mt-4">
                <Label>Password</Label>
                <Input
                 type={passwordVisible ? "text" : "password"} // Conditional type
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Password"
                  className="pr-10"
                />


 {/* Toggle Eye Icon */}
 <div
 style={{
  marginTop:'170px',
  marginRight:'320px'
 }}
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
              <div className="flex items-center justify-between mt-4">
                <RadioGroup className="flex items-center gap-4 my-5 ">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={input.role === "student"}
                      onChange={changeEventHandler}
                      className="cursor-pointer  appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                    />
                    <Label
                      htmlFor="r1"
                      className="cursor-pointer text-white hover:text-gray-800 transition-colors"
                    >
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="cursor-pointer appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                    />
                    <Label
                      htmlFor="r2"
                      className="cursor-pointer text-white hover:text-gray-800 transition-colors"
                    >
                      Recuriter
                    </Label>
                  </div>
                </RadioGroup>
              </div>

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
                  Login
                </Button>
              )}

              <span className="text-white text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-white hover:text-gray-800 underline ml-1 transition duration-200"
                >
                  SignUp
                </Link>
              </span>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default login;
