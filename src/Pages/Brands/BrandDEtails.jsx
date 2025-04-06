import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import CopyToClipboard from "react-copy-to-clipboard";
import UseBrands from "../../Hooks/UseBrands";
const BrandDEtails = () => {
  const { id } = useParams();

  const { BrandsDetails } = UseBrands();

  //   const [BrandsDetails, setBrandsDetails] = useState([]);

  //   useEffect(() => {
  //     fetch("/CuponData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setBrandsDetails(data);
  //       });
  //   }, []);
  // console.log(BrandsDetails)

  const handleCopy = () => {
    Swal.fire({
      title: " Copid Success!",
      icon: "success",
      draggable: true,
    });
  };

  const brand = BrandsDetails?.find((data) => data._id === id);
  console.log(brand);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-4 text-center relative border rounded-xl">
        <figure className="px-10 pt-10">
          <img
            src={brand?.brand_logo}
            alt={brand?.brand_name}
            className=" w-[500px] object-contain"
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title text-lg font-semibold">
            {brand?.brand_name}
          </h2>
          <div className="flex items-center gap-1 text-yellow-500 mt-1">
            {/* {[...Array(Math.round(brand?.rating))].map((_, i) => (
              <FaStar key={i} />
            ))} */}
            {brand?.rating}
          </div>
          <p className="text-gray-600 text-sm">{brand?.description}</p>
          {brand?.isSaleOn && (
            <motion.div
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}>
              Sale is On!
            </motion.div>
          )}
          {/* <div className="card-actions mt-4">
            <NavLink
              to={`/BrandDetails/${brand?._id}`}
              className="btn btn-primary">
              View Coupons
            </NavLink>
          </div> */}

          <div className="flex items-center justify-center   gap-2 mt-4">
            <div>
              <CopyToClipboard text={brand?.brand_name} onCopy={handleCopy}>
                <button className="btn btn-outline btn-primary">
                  Copy Code
                </button>
              </CopyToClipboard>
            </div>

            <div>
              {" "}
              <a href={`${brand?.shopLink}`} className="btn btn-primary mt-2">
                Use Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDEtails;
