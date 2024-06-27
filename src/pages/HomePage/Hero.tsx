// import React from 'react'

import { PiTelevisionSimpleLight } from "react-icons/pi";
import { GiPowerGenerator } from "react-icons/gi";
import { RiHomeWifiLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineKitchen } from "react-icons/md";
import { RiArmchairFill } from "react-icons/ri";
import { PiLightbulbFilamentThin } from "react-icons/pi";
import { GiTheaterCurtains } from "react-icons/gi";
import { LuCable } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import tv1 from "../../assets/images/hero/tv1.png"
import chair from "../../assets/images/hero/chair1.png";
import fridge from "../../assets/images/hero/fridge2.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {

    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidestoShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }

  return (
    <div className="w-full h-[100%] pt-[30px] md:pt-0 md:h-[80vh]  flex justify-center font-pop bg-white">
        <div className="w-[90%] h-full lg:flex justify-between">
            <motion.div className="hidden lg:flex bg-white shadow-m border-[1px] border-gray-300  w-[270px] h-full flex-col gap-2 p-3 text-[15px] border-t-[0px] rounded-b-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2 className="mb-[7px] p-1 border-b-[1px] border-t-[1px] border-b-gray-300 border-t-gray-300 bg-gray-300 pl-2 rounded-md text-[18px]">All Categories</h2>
                <h3 className="p-1 border-b-[1px] border-t-[1px border-b-gray-300 border-t-gray-30 flex items-center gap-4"><span className="text-[20px]"><PiTelevisionSimpleLight /></span>Televisions</h3>
                <h4 className="p-1 border-b-[1px] border-t-[1px border-b-gray-300 border-t-gray-30 flex items-center gap-4"><span className="text-[20px]"><GiPowerGenerator /></span>Generators</h4>
                <h5 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><MdOutlineKitchen /></span>Air Conditioners</h5>
                <h6 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><RiHomeWifiLine /></span>Home Appliances</h6>
                <h6 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><FaKitchenSet /></span>Kitchen Appliances</h6>
                <h6 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><RiArmchairFill /></span>Furnitures</h6>
                <h6 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><GiTheaterCurtains /></span>Decorations</h6>
                <h6 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><PiLightbulbFilamentThin /></span>Bulbs & Lights</h6>
                <h6 className="p-1 border-b-[1px] border-b-gray-300  flex items-center gap-4"><span className="text-[20px]"><LuCable /></span>Cables & Wires</h6>
                <h6 className="p-1 border-b-[1px border-b-gray-30  flex items-center gap-4"><span className="text-[20px]"><IoGameControllerOutline /></span>Games & Accessories</h6>
            </motion.div>

            <div className="w-full lg:w-[calc(100%-300px)] bg-blac h-full flex justify-center items-center">
                <motion.div className="bg-gray-200 w-[100%] h-[90%]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Slider {...settings}>
                    
                        <div className="w-full h-full"><div className="w-full h-[100%] p-4 flex flex-col md:flex-row md:justify-around md:items-center items-center gap-7 md:mt-[50px]">
                            <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 lg:gap-5">
                                <motion.h6 className="bg-[#ffbd27] text-center p-1 rounded-[20px] text-[14px] w-[100px]"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >In Sale</motion.h6>

                                <motion.h6 className="text-[30px] md:text-[35px] leading-[35px] md:leading-[45px]  font-thin"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                >Enhance Your <br /><span className="font-bold">Entertainment</span></motion.h6>

                                <motion.h6 className="text-[14px]"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.5 }}
                                >Up to <span className="text-[16px] font-bold text-red-400">25%</span> OFF!</motion.h6>

                                <motion.a href="" className="w-[150px] bg-[#3e4095] text-white hover:text-white hover:bg-gray-400 rounded-[20px] text-center py-1 md:py-2"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.7 }}
                                >Shop Now</motion.a>
                            </div>

                            <motion.div className="lg:w-[50%]"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.0 }}
                            > 
                                <img className="w-full" src={tv1} alt="" />
                            </motion.div>
                        </div></div>

                        <div className="w-full h-full"><div className="w-full h-full p-4 flex flex-col md:flex-row md:justify-around md:items-center items-center gap-7">
                            <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 lg:gap-5">
                                <motion.h6 className="bg-[#ffbd27] text-center p-1 rounded-[20px] text-[14px] w-[100px]"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >In Sale</motion.h6>

                                <motion.h6 className="text-[30px] md:text-[35px] leading-[35px] md:leading-[45px]  font-thin"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                >Great Stores <br /><span className="font-bold">Great Choices</span></motion.h6>

                                <motion.h6 className="text-[14px]"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.5 }}
                                >Up to <span className="text-[16px] font-bold text-red-400">25%</span> OFF!</motion.h6>

                                <motion.a href="" className="w-[150px] bg-[#3e4095] text-white hover:text-white hover:bg-gray-400 rounded-[20px] text-center py-1 md:py-2"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.7 }}
                                >Shop Now</motion.a>
                            </div>

                            <motion.div className="lg:w-[50%]"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.0 }}
                            > 
                                <img className="w-full" src={chair} alt="" />
                            </motion.div>
                        </div></div>

                        <div className="w-full h-full"><div className="w-full h-full p-4 flex flex-col md:flex-row md:justify-around md:items-center items-center gap-7">
                            <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 lg:gap-5">
                                <motion.h6 className="bg-[#ffbd27] text-center p-1 rounded-[20px] text-[14px] w-[100px]"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >In Sale</motion.h6>

                                <motion.h6 className="text-[30px] md:text-[35px] leading-[35px] md:leading-[45px]  font-thin"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                >Not Home? <br /><span className="font-bold">Stay Cool!</span></motion.h6>

                                <motion.h6 className="text-[14px]"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.5 }}
                                >Up to <span className="text-[16px] font-bold text-red-400">25%</span> OFF!</motion.h6>

                                <motion.a href="" className="w-[150px] bg-[#3e4095] text-white hover:text-white hover:bg-gray-400 rounded-[20px] text-center py-1 md:py-2"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.7 }}
                                >Shop Now</motion.a>
                            </div>

                            <motion.div className="lg:w-[45%]"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.0 }}
                            > 
                                <img className="w-full" src={fridge} alt="" />
                            </motion.div>
                        </div></div>

                    </Slider>

                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero