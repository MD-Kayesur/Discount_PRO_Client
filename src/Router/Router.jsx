import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../AuthProvider/Login";
import Signup from "../AuthProvider/Signup";
import Brands from "../Pages/Brands/Brands";
import AboutDev from "../Pages/AboutDev/AboutDev";
import DashBors from "../MyProfile/DashBord";
import MyProfile from "../MyProfile/MyProfile";
import BrandDEtails from "../Pages/Brands/BrandDEtails";
import AllBrands from "../Pages/Home/AllBrands";
 

 

export const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout></MainLayout>,
     children:[
        {
            path:'/',
            element:<Home></Home>
        },
           
        {
            path:'/Brands',
            element:<Brands></Brands>
        },
        {
            path:'/BrandDetails/:id',
            element:<BrandDEtails></BrandDEtails>
        },
        {
            path:'/allBrands',
            element:<AllBrands></AllBrands>
        },
        {
            path:'/AboutDev',
            element:<AboutDev></AboutDev>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
     ]
   },

   {
    path:'/dashbord',
    element:< DashBors></ DashBors>,
    children:[
        
        {
            path: "MyProfile",
            element: <MyProfile></MyProfile>,
          },
       
    ]
}
 ]);