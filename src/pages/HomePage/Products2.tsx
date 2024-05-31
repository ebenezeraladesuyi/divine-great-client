// import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import Products2Card from "../../components/static/Products2Card";
import gen from "../../assets/images/electronics/gen3.png";
import headphone from "../../assets/images/electronics/headPhone3.jpeg";
import speaker from "../../assets/images/electronics/bluetooth-Speaker.jpg";

const Products2 = () => {
  return (
    <div className="w-full h-[100%] py-[25px] flex justify-center items-center">
        <div className="w-[90%] flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
                <h6 className="text-[#3e4095] text-[15px] md:text-[18px] font-bold animate-bounce">SELLING FAST</h6>

                <a href="" className="flex items-center gap-3 cursor-pointer text-[#3e4095] text-[13px] animate-pulse">Order Now <span><FaArrowRightLong /></span></a>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 flex-wrap">
                
                {/* <Slider {...settings}> */}

                    <Products2Card 
                        image={gen}
                        title="Firman Generator"
                        details1="10.0 kva"
                        details2="1 Year Warranty"
                        details3="24 Hours Non-Stops"
                    />

                    <Products2Card 
                        image={speaker}
                        title="Echo Dot (4th Gen)"
                        details1="Smart Speaker"
                        details2="3.53 ich (H)"
                        details3="Wi-Fi, Bluetooth"
                    />

                    <Products2Card 
                        image={headphone}
                        title="Bose HeadPhone"
                        details1="Noise Cancelling"
                        details2="Wireless Bluetooth"
                        details3="12 Hours Battery Power"
                    />


                {/* </Slider> */}

            </div>

            <a href="" className="cursor-pointer text-[13px] md:text-[16px] flex items-center gap-3 justify-center md:justify-start lg:justify-end">See More Products.. (Chat Us) <span><FaArrowRightLong /></span></a>
        </div>
    </div>
  )
}

export default Products2