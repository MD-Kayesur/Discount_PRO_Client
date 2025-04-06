import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import UseBrands from "../../Hooks/UseBrands";

const SaleBrands = () => {
//   const navigate = useNavigate();
const {SaleBrand}= UseBrands()

// const [SaleBrand,setSaleBrand] = useState([])
// useEffect(()=>{
//     fetch('../../../public/CuponData.json')
//     .then(res=> res.json())
//     .then(data=>{
//         setSaleBrand(data)
//     })
// },[])


 
 console.log(SaleBrand)
  const AllSaleBvrands = SaleBrand.filter(someBrands => someBrands.isSaleOn === true)

  return (

 <div>

<div>
    <h2 className="text-3xl">Brands on Sell</h2>
</div>
<div className=" grid my-5 gap-10 md:grid-cols-4">

{
    AllSaleBvrands?.map(brand =>
    <div className="card bg-base-100 shadow-xl p-4 text-center relative border rounded-xl">
    <figure className="px-5 pt-5">
      <img src={brand.brand_logo} alt={brand.brand_name} className=" h-[200px] object-contain" />
    </figure>
    <div className="card-body  text-left">
      <h2 className="card-title text-lg font-semibold"> brand : {brand.brand_name}</h2>
      
      <p className="text-gray-600 text-sm">total_coupons : {brand.total_coupons}</p>
      {brand.isSaleOn && (
          <motion.div
          className="absolute top-10 right-10 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          >
          Sale is On!
        </motion.div>
      )}

      <p className="text-gray-600 text-sm"> category :{brand.category}</p>

    </div>
  </div> )
}
      <div className="card-actions mt-4">
        <NavLink  to={(`/allBrands`)} className="btn btn-primary">All Brands</NavLink>
      </div>
          </div>
      </div>
 


    
  );
};

export default SaleBrands;
