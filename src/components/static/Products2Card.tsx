/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";

interface iProduct2Card {
    image: any;
    title: string;
    details1 ? : string;
    details2 ? : string;
    details3 ? : string;
}

const Products2Card:React.FC<iProduct2Card> = ({image, title, details1, details2, details3}) => {
  return (
      <div className="w-full md:w-[47%] lg:w-[32%] h-[170px] md:h-[200px] border-gray-300 border-[1px] rounded-md p-3 flex items-center justify-center gap-5"
      >
          <div className="w-[40%]">
              <img src={image} className="w-full" alt="" />
          </div>

          <div className="flex flex-col gap-">
              <h6 className="font-bold  md:text-[18px]">{title}</h6>

              <h6 className="text-gray-400 text-[13px] md:text-[16px]">{details1} </h6>

              <h6 className="text-gray-400 text-[13px] md:text-[16px]">{details2}</h6>

              <h6 className="text-gray-400 text-[13px] md:text-[16px]">{details3}</h6>

              <a href="https://api.whatsapp.com/send?phone=2349034374021" className="text-[#3e4095 flex items-center gap-3 mt-[7px] text-[13px] md:text-[16px] ">Buy Now <span><FaArrowRightLong /></span></a>
          </div>

    </div>
  )
}

export default Products2Card