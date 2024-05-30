/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

// import { FaPlaneUp } from "react-icons/fa6";

interface iShip {
    icon : any;
    title : string;
    details : string;
}

const ShipmentCard:React.FC<iShip> = ({icon, title, details}) => {
  return (
    <div className="w-full md:w-[30%] flex items-center justify-between gap-4" >
        <div className="text-[40px]">
            {/* <FaPlaneUp /> */}
            {icon}
        </div>

        <div className=" text-[14px] md:text-[16px]">
            <h6 className="font-bold">
                {/* International & Local Delivery */}
                {title}
            </h6>
            <h6 className="text-justify">
                {/* Your orders are shipped seamlessly within & between countries */}
                {details}
            </h6>
        </div>
    </div>
  )
}

export default ShipmentCard