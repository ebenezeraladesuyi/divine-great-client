// import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import Products2Card from "../../components/static/Products2Card";
import gen from "../../assets/images/electronics/gen3.png";
import chair from "../../assets/images/electronics/4PCS-outdoor-Furniture-Set-Conversation-Glass-Table-Top-Cushioned-Sofa-Beige.jpeg";
import headphone from "../../assets/images/electronics/headPhone3.jpeg";
import door from "../../assets/images/electronics/Single-security-doors-modern-secure-door-sigma.jpg";
import speaker from "../../assets/images/electronics/bluetooth-Speaker.jpg";
import RevealMap from "../../animation/RevealMap";
import fan from "../../assets/images/electronics/ox-18-fan-adjustable-standing-black.jpg";
import washing from "../../assets/images/electronics/hisense-5kg-topLoadTwinTub-washingMachine.jpg";
import chan from "../../assets/images/electronics/modern-13-light-chandeliar-hom-decor.jpg";
import tv from "../../assets/images/electronics/43-HISENSE-4k-smartLed-tv.jpg";
import wire from "../../assets/images/electronics/electric-wire-and-cables.jpg";
import fridge from "../../assets/images/electronics/gh-050122-best-smart-refrigerators.png";
import ornament from "../../assets/images/electronics/copper-gold-coral-ornaments-homeAccessories-mableCraft.jpg";
import toast from "../../assets/images/electronics/binatone-4SliceToaster-pop414.jpg";
import ornament2 from "../../assets/images/electronics/Nordic-Ornaments-Decorative-Design-Table-Decoration-Accessories-for-Home-Modern.webp";
import tv2 from "../../assets/images/electronics/SLE-55US800TCSB-2-smartUHD-TV.jpg";



const Products2 = () => {
  return (
    <div className="w-full h-[100%] py-[25px] flex justify-center items-center bg-white">
        <div className="w-[90%] flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
                <h6 className="text-[#3e4095] text-[15px] md:text-[18px] font-bold animate-bounce">SELLING FAST</h6>

                <a href="" className="flex items-center gap-3 cursor-pointer text-[#3e4095] text-[13px] animate-pulse">Order Now <span><FaArrowRightLong /></span></a>
            </div>

            <RevealMap>
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 flex-wrap">
                
                {/* <Slider {...settings}> */}

                    <Products2Card 
                        image={tv2}
                        title="Smart UHD TV"
                        details1="SLE-55US800"
                        details2="Home Appliances"
                        details3=""
                    />

                    <Products2Card 
                        image={chair}
                        title="4-PCS Furniture"
                        details1="Outdoor Conversation"
                        details2="Glass Table"
                        details3="Furnitures"
                    />

                    <Products2Card 
                        image={gen}
                        title="Firman Generator"
                        details1="10.0 kva"
                        details2="1 Year Warranty"
                        details3="Electrical"
                    />

                    <Products2Card 
                        image={fan}
                        title="OX Standing Fan"
                        details1="16' "
                        details2="Adjustable. Black."
                        details3="Home Appliances"
                    />

                    <Products2Card 
                        image={ornament}
                        title="Coral Ornaments"
                        details1="Copper Gold"
                        details2="Mable Craft"
                        details3="Home Accessories"
                    />

                   <Products2Card 
                        image={washing}
                        title="Hisense Washing Machine"
                        details1="5kg Top-Load Loading"
                        details2="Twin Tub"
                        details3="Home Appliances"
                    />

                    <Products2Card 
                        image={chan}
                        title="Luxury Chandeliar"
                        details1="13 Light"
                        details2="Cystal LED"
                        details3="Home Accesories"
                     />

                    <Products2Card 
                        image={tv}
                        title="Hisense 43'"
                        details1="4k Smart LED"
                        details2="Home Applainces"
                        details3=""
                    />

                    <Products2Card 
                        image={door}
                        title="Security Door"
                        details1="Modern Single Sigma"
                        details2="Home Applainces"
                        details3=""
                    />

                    <Products2Card 
                        image={ornament2}
                        title="Nordic Ornamnets"
                        details1="Table Decor"
                        details2="Home Applainces"
                        details3=""
                    />

                    <Products2Card 
                        image={fridge}
                        title="Smart Refrigirator"
                        details1="GH 050122"
                        details2="Home Appliances"
                        details3=""
                    />

                    <Products2Card 
                        image={wire}
                        title="Electric Wire & Cables"
                        details1=""
                        details2="Electricals"
                        details3=""
                    />

                    <Products2Card 
                        image={toast}
                        title="Binatone Toaster"
                        details1="4 Slice"
                        details2="Pop 414"
                        details3="Home Appliances"
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
            </RevealMap>

            <a href="" className="cursor-pointer text-[13px] md:text-[16px] flex items-center gap-3 justify-center md:justify-start lg:justify-end">See More Products.. (Chat Us) <span><FaArrowRightLong /></span></a>
        </div>
    </div>
  )
}

export default Products2