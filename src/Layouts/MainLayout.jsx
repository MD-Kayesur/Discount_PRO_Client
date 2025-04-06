import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navber";
import Footer from "../Component/Footer";

 

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="py-20">
        <Outlet></Outlet>
      </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;