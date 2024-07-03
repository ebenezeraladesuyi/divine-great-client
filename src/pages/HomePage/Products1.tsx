// import React from 'react'

import RevealMap from "../../animation/RevealMap";
import ac from "../../assets/images/electronics/ac.png";
// import ac2 from "../../assets/images/electronics/ac2.jpg";
// import gen from "../../assets/images/electronics/gen2.png";


const Products1 = () => {
  return (
    <div id="products" className="w-full h-[100%] py-[20px] flex justify-center items-center bg-white">
        
        <div className="w-[90%] flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">

            <RevealMap className="w-full md:w-[40%] ">
            <div className="w-full md:w-[40% border-gray-300 border-[1px] h-[30vh] rounded-md flex justify-betwee gap-5 items-center p-2  hover:bg-gray-100  transition-all duration-300 ease-in-out ">
                <div className="w-[55%]">
                    <img className="w-full" src={ac} alt="" />
                </div>
                
                <div className="flex flex-col gap-1 ">
                    <h6 className="font-bold text-[13px] md:text-[16px]">Hisense Supercool <br />Air Conditioner</h6>
                    <h6 className="font-bold text-red-400 text-[13px] md:text-[16px]">5% Off!</h6>
                    <a href="" className="bg-[#3e4095] py-1 md:py-2 w-[100px] text-white hover:text-white text-center rounded-[25px] hover:bg-gray-300 text-[13px] md:text-[16px]">Shop Now</a>
                </div>
            </div>
            </RevealMap>

            <RevealMap className="w-full md:w-[58%] ">
                <div className="w-full md:w-[58% h-[30vh] shadow-m border-gray-300 border-[1px] rounded-md flex justify-between p-2 md:p-5 hover:bg-gray-100  transition-all duration-300 ease-in-out bg-bg1 bg-center bg-cover items-center">     
                <div className="flex flex-col gap-1 ">
                    <h6 className="font-bold text-[13px] lg:text-[18px] md:text-[16px]">Hisense Supercool <br />Air Conditioner</h6>
                    <h6 className="font-bold text-red-400 text-[13px] md:text-[16px]">6% Off!</h6>
                    <a href="" className="bg-[#3e4095] py-1 md:py-2 w-[100px] text-white hover:text-white text-center rounded-[25px] hover:bg-gray-300 text-[13px] md:text-[16px]">Shop Now</a>
                </div>

                <div className="w-[35%]">
                    <img src="" alt="" className="w-full" />
                </div>
            </div>
            </RevealMap>

        </div>
        
    </div>
  )
}

export default Products1;