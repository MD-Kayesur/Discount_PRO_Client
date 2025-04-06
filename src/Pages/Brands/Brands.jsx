import React, { useEffect, useState } from "react";
import { data, Link, NavLink, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
  import { motion } from "framer-motion";
import UseBrands from "../../Hooks/UseBrands";

const Brands = () => {
//   const navigate = useNavigate();
const {BrandsDetails} = UseBrands()
console.log(BrandsDetails)
// const [AllBrands,setAllBrands] = useState([])
// useEffect(()=>{
//     fetch('../../../public/CuponData.json')
//     .then(res=> res.json())
//     .then(data=>{
//         setAllBrands(data)
//     })
// },[])


 
 
  

  return (

<>
<div>
<div>
    <h3 className="text-3xl">
    Top  Brands
    </h3>
</div>
<div className=" grid my-5 gap-10 md:grid-cols-4">

{
    BrandsDetails?.map(brand =>
    <div className="card bg-base-100 shadow-xl p-4 text-center relative border rounded-xl">
    <figure className="px-10 pt-10">
      <img src={brand.brand_logo} alt={brand.brand_name} className="w-[500px] object-contain" />
    </figure>
    <div className="card-body items-center">
      <h2 className="card-title text-lg font-semibold">{brand.brand_name}</h2>
      <div className="flex items-center gap-1 text-yellow-500 mt-1">
        {[...Array(Math.round(brand.rating))].map((_, i) => (
            <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-600 text-sm">{brand.description}</p>
      {brand.isSaleOn && (
        <motion.div
        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        >
          Sale is On!
        </motion.div>
      )}
      <div className="card-actions mt-4">
        <NavLink  to={(`/BrandDetails/${brand._id}`)} className="btn btn-primary">View Coupons</NavLink>
      </div>
    </div>
  </div> )
}
      </div>
      </div>
</>


    
  );
};

export default Brands;
