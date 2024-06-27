// import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import Products2Card from "../../components/static/Products2Card";
import gen from "../../assets/images/electronics/gen3.png";
import headphone from "../../assets/images/electronics/headPhone3.jpeg";
import speaker from "../../assets/images/electronics/bluetooth-Speaker.jpg";
// import fan from "../../assets/images/electronics/fan.png";
// import washing from "../../assets/images/electronics/washing.png";
// import chan from "../../assets/images/electronics/chadelia.png";
// import ps4 from "../../assets/images/electronics/ps4.png";
// import toast from "../../assets/images/electronics/toast.png";
// import light from "../../assets/images/electronics/light.png";



const Products2 = () => {
  return (
    <div className="w-full h-[100%] py-[25px] flex justify-center items-center bg-white">
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

                    {/* <Products2Card 
                        image={fan}
                        title="Scanfrost AC Stand Fan"
                        details1="16' AC"
                        details2="Remote Enabled"
                        details3="SFMF16RC"
                    /> */}

                   {/* <Products2Card 
                        image={washing}
                        title="Samsung Washing Machine"
                        details1="6kg Front Loading"
                        details2="Silver"
                        details3=""
                    /> */}

                {/* //     <Products2Card  */}
                {/* //         image={chan}
                //         title="Luxury Chandeliar"
                //         details1="Crystal LED"
                //         details2="High Ceiling"
                //         details3=""
                //     /> */}

                {/* //     <Products2Card 
                //         image={ps4}
                //         title="Sony PS4"
                //         details1="Pro - 1TB"
                //         details2="Console - Black"
                //         details3=""
                //     /> */}

                {/* //    <Products2Card 
                //         image={toast}
                //         title="Breville Toastining Machine"
                //         details1="4-Face Toast"
                //         details2="Electric Enabled"
                //         details3=""
                //     /> */}

                {/* //     <Products2Card 
                //         image={light}
                //         title="Interior Decor Light"
                //         details1="4 Colored Light"
                //         details2=""
                //         details3=""
                //     /> */}


                {/* </Slider> */}

            </div>

            <a href="" className="cursor-pointer text-[13px] md:text-[16px] flex items-center gap-3 justify-center md:justify-start lg:justify-end">See More Products.. (Chat Us) <span><FaArrowRightLong /></span></a>
        </div>
    </div>
  )
}

export default Products2