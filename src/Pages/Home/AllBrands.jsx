import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UseBrands from "../../Hooks/UseBrands";
import useBannerData from "../../Hooks/usebannerData";

 

const AllBrands = () => {

const {AllBrands}=UseBrands()

// const [AllBrands,setAllBrands] = useState([])
// useEffect(()=>{
//     fetch('../../../public/CuponData.json')
//     .then(res=> res.json())
//     .then(data=>{
//         setAllBrands(data)
//     })
// },[])



    return (
        <div>
            {
              <div className=" grid my-5 gap-10 md:grid-cols-4">
              {AllBrands.map((brand) => (
                <NavLink key={brand._id} to={(`/BrandDetails/${brand._id}`)} className="mx-4">
                  <img src={brand.brand_logo} alt={brand.brand_name} className=" h-[200px]  " />
                  <h1 className="text-2xl py-2"> Brand Name: {brand.brand_name} </h1>
                </NavLink>
              ))}
               </div>
            }
        </div>
    );
};

export default AllBrands;