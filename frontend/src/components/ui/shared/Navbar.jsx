import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
// import { Button } from '../../ui/Button';
import React from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setUser } from "@/redux/authslice";



const Navbar = () => {


const dispatch = useDispatch();
const navigate = useNavigate();
const logoutHandler = async()=>{
  try {
    const res= await axios.get(`${USER_API_END_POINT}/logout`, {
      withCredentials :true
    });
    if(res.data.success){
      dispatch(setUser(null));
      navigate("/");
      toast.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    
  }
} 
const {user} = useSelector(store=> store.auth);

const handleNavigateToHome = () => {
  navigate('/'); // Navigates to the home page
};




  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-4 px-8">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold cursor-pointer
          
          "
           onClick={handleNavigateToHome} 
          
          >
            Talent <span className="text-[#F83002]">Sphere</span>
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">





            {
              user && user.role == 'recruiter' ? (
                <>
                <li>
              <Link to="/admin/companies" className="text-black">Companies</Link> 
            </li>
            <li>
              <Link to="/admin/jobs" className="text-black"> Jobs</Link>
            </li>
                
                
                </>
              ) : (
                <>
                 <li>
              <Link to="/" className="text-black"> Home</Link> 
            </li>
            <li>
              <Link to="/jobs" className="text-black"> Jobs</Link>
            </li>
            <li>
              <Link to="/browse" className="text-black">Browse</Link> 
            </li>
                
                
                
                </>
              )



            }
           
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                {" "}
                <Button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-teal-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-9 h-8 border-2 border-gray-300  rounded-full  cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    className="object-cover rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-white border shadow-lg rounded-lg flex items-center space-x-4">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="w-8 h-4 border-2  border-gray-300 rounded-full cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                        className="object-cover rounded-full"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-gray-600 mt-4 my-2">
                    {
user && user.role == 'student' && (


  <div className="flex w-fit items-center gap-2 cursor-pointer">
  <User2 />
  <Button variant="link"> <Link to="/profile">View profile</Link></Button>
</div>

)


                    }








                
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick= {logoutHandler}  variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
