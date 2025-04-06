import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import { FaPersonRifle } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

 
 

const DashBors = () => {

 
// const isAdmin = true
 
    return (
        <div className="w-11/12 flex mx-auto py-5">
 

      {/* dashbord ar  side bars ba menu */}
      <div className="w-64  min-h-screen  bg-red-600 text-white">
        <ul className="menu">
          
      



        <li>
          
          <NavLink className=' ' to="/dashbord/MyProfile">   <FaPersonRifle></FaPersonRifle> My Profile</NavLink>
        </li>
        <li>
          
          <NavLink className=' ' to="/">   <FaHome></FaHome> Home</NavLink>
        </li>
       
        </ul>
      </div>

      {/* dashbord ar content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default DashBors;