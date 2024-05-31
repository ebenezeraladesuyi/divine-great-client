// import React from 'react'

import ShipmentCard from "../../components/static/ShipmentCard"
import { FaPlaneUp } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { MdAssuredWorkload } from "react-icons/md";

const Shipment = () => {
  return (
    <div className="w-full h-[100%] py-[30px] md:h-[40vh] flex justify-center items-center overflow-hidden">
        <div className="w-[90%] h-full flex flex-col md:flex-row items-center md:justify-between gap-5">

            <ShipmentCard 
                icon={<FaPlaneUp/>}
                title="International & Local Delivery"
                details="Your orders are shipped seamlessly within & between countries."
            />

            <div className="hidden md:block h-full w-[1px] bg-[#3e4095 bg-gray-300"></div>
            <hr className="w-full border-gray-300 border-[1px]  md:hidden" />

            <ShipmentCard 
                icon={<GiReturnArrow/>}
                title="Extended 45 Day Returns"
                details="You have the right to return your orders within 30 days."
             />

            <div className="h-full w-[1px] bg-[#3e4095 bg-gray-300"></div>
            <hr className="w-full border-gray-300 border-[1px]  md:hidden" />

            <ShipmentCard 
                icon={<MdAssuredWorkload/>}
                title="Guaranteed Warranty Period"
                details="All our products have a quaranteed warranty period, that doesn't fail."
             />
        </div>
    </div>
  )
}

export default Shipment