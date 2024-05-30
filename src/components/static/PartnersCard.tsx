/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

// import hp from "../../assets/images/partners/hp.png";

interface iPartner {
    image: any;
}

const PartnersCard:React.FC<iPartner> = ({image}) => {
  return (
    <div className="w-[120px] md:w-[150px] h-[130px] ml-[10px md:ml-[7px] lg:ml-[30px] flex justify-center items-center mt-[15px]">
        <img className="w-full" src={image} alt="" />
    </div>
  )
}

export default PartnersCard