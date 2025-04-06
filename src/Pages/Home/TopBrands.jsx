import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import UseBrands from "../../Hooks/UseBrands";
const TopBrands = () => {
//   const navigate = useNavigate();

const {AllTopbrands} = UseBrands()
// const [AllTopbrands,setAllTopbrands] = useState([])
// useEffect(()=>{
//     fetch('../../../public/CuponData.json')
//     .then(res=> res.json())
//     .then(data=>{
//         setAllTopbrands(data)
//     })
// },[])


 
 
  const AllSaleBvrands = AllTopbrands.filter(someBrands => someBrands.isSaleOn === true)

  return (

 <div>

 


{
    <div className="my-8">
   <h2 className="text-2xl font-bold text-center mb-4">Top Brands</h2>
       <Marquee pauseOnHover speed={50}>
       <div className=" flex md:grid my-5 gap-10 md:grid-cols-4">
     {AllSaleBvrands.map((brand) => (
       <Link key={brand._id} to='/allBrands' className="mx-4">
         <img src={brand.brand_logo} alt={brand.brand_name} className="h-[200px] object-contain" />
       </Link>
     ))}
      </div>
   </Marquee>
 </div>
}
          </div>
     
 


    
  );
};

export default TopBrands;
