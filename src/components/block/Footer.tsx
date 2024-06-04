// import React from 'react'

import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import logo from "../../assets/images/logo/divine-Logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div id="footer" className='w-full flex flex-col justify-center items-center font-pop bg-gray-20 pt-[40px] text-[##8995af] gap-5 relative'>
      <div className="w-[90%] flex flex-col md:flex-row md:justify-between gap-5 md:gap-6 lg:gap-8">

        <div className=" flex flex-col gap-3 mb-[15px] md:mb-0 md:w-[40%]">

          <img className="w-[60px]" src={logo} alt="" />

          <hr className="border-[2px] w-[70px] border-[#3e4095]" />

          <h6 className="text-[12px] md:text-[14px] text-justify">
            We are a trusted electrical and electronics company in Nigeria. With over five (10) years of experience, in selling, buying, delivery and working with local and international clients and partners, and a combined wealth of specialist outcome and result mixed with professionalism. Our products have been certified by various customers within and outside the country.
          </h6>

          <div className="text-[12px] font-bol flex flex-col gap-2">

            <div className="flex items-center gap-2">
              <div className="text-[20px] text-[#3e4095] ">
                <CiLocationOn />
              </div>

              <div>
                <h5>Opp. Enyo Filling Station, Beside Secretariat, Bank Road, Ado-Ekiti, Ekiti State.</h5>
                {/* <h5>Irawoosan Street, Ketu Alapere, Lagos.</h5> */}
              </div>
            </div>

            <h5 className="flex items-center gap-2"><span className="text-[17px] text-[#3e4095]"><LuPhoneCall /></span> 08142350346 , 09034374021</h5>

            <h5 className="flex items-center gap-2"><span className="text-[17px] text-[#3e4095]"><MdOutlineAttachEmail /></span> divinegreatelectronics@gmail.com</h5>
            
          </div>

        </div>

        <div className="flex flex-col gap-3 mb-[15px] md:mb-0 md:w-[30%]">
          <h5 className="text-[#3e4095] font-bold text-[14px] md:text-[16px]">Working Hours</h5>

          <hr className="border-[2px] w-[50px] border-[#3e4095]"  />

          <div className="text-[12px]">
            <h6 className="py-2 flex justify-between items-center">Monday <span>9:00am - 6:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Tuesday <span>9:00am - 6:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Wednesday <span>9:00am - 6:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Thursday <span>9:00am - 6:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Friday <span>9:00am - 6:00pm</span></h6>
            <hr />
            <h6 className="py-2 flex justify-between items-center">Saturday <span>9:00am - 6:00pm</span></h6>
          </div>

          <h6 className="text-[12px]">
            You can call us or send us an email every other day.
          </h6>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-[#3e4095] font-bold text-[14px] md:text-[16px]">Follow Us on Social Media</h5>

          <hr className="border-[2px] w-[50px] border-[#3e4095]" />

          <div className="flex gap-2 items-center text-[22px]">
            <a className="text-[#000000]" href=""><FaFacebookSquare /></a>
            <a className="text-[#000000]"  href=""><FaInstagramSquare /></a>
            <a className="text-[#000000]"  href=""><FaSquareXTwitter /></a>
            <a className="text-[#000000]"  href=""><FaWhatsappSquare /></a>
          </div>

        </div>

      </div>

      <hr className="w-[90%] border-[1px] border-[#3e4095]" />

      <div className="w-[100%] bg-gray-20 pb-[0px] flex justify-center items-center mt-[0px]">
        <h5 className="text-[10px] md:text-[13px] text-center lg:text-[16px] text-[#3e409] w-[90%]">Copyright &#169; 2024 Divine Great Electrical & Electronics Ventures Nig. All Right Reserved.</h5>
      </div>

      <Link  offset={-100} smooth={true} duration={800} to="header">
        <div className='absolute right-[30px] bottom-[30px]  animate-bounce bg-[#3e4095] text-white text-[25px] p-2 flex justify-center items-center rounded-full cursor-pointer'>
        <IoIosArrowUp />
        </div>
      </Link>

    </div>
  )
}

export default Footer