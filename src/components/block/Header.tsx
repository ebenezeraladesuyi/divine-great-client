import React from 'react'
import logo from "../../assets/images/logo/divine-Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { MdOutlineMenu } from "react-icons/md";
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


const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)
    const [dropdown2, setDropdown2] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

    const showDropdown2 = () => {
        setDropdown2(!dropdown2)
    }

  return (
    <div id='header' className={`w-full h-[140px] lg:h-[130px flex flex-col justify-center items-center shadow-m font-pop fixe z-40 bg-white text-white  shadow-m relative`}>
        <div className="w-[90%] h-[50%] flex flex-co justify-between items-center border-b-[1px] border-b-gray-300  ">

            {/* <div className='hidden w-[100%] h-full lg:flex justify-between items-center'>

                <div className='p-2 rounded-md bg-white shadow-md w-[50px] md:[70px] z-40'>
                    <img className="w-full " src={logo} alt="W2H-logo" />
                </div>

            </div> */}

            {/* <div className='flex justify-between items-center w-full'> */}
            <NavLink to='/'>
                <div className='lg:hidde p-2 rounded-md bg-whit shadow-m w-[50px] md:w-[70px] z-40'>
                <img className="w-full " src={logo} alt="W2H-logo" />
                </div>
            </NavLink>

            {/* <h4 className='text-[17px] z-50 shadow-md text-white bg-opacity-40 rounded-[30px] relative p-1 px-3 rounded-m bg-black'>DanWilliams Consult</h4> */}

            <div className='lg:bg-white lg:bg-opacity-4 rounded-[30px] lg:shadow-m p-3'>
                <li className="hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out">
                    <NavLink to="/">
                        <ol className='text-[#3e4095] hover:text-[#000000] cursor-pointer font-semibol transition-all duration-300 ease-in-out'>Home</ol>
                    </NavLink>

                    <Link offset={-100} smooth={true} duration={500} to="products">
                    {/* <NavLink to='/'> */}
                        <ol className='text-[#3e4095]  hover:text-[#000000] cursor-pointer font-semibol transition-all duration-300 ease-in-out'>Our Products</ol>
                    </Link>

                    <Link offset={-100} smooth={true} duration={900} to="footer">
                        <ol className='text-[#3e4095]  hover:text-[#000000] cursor-pointer font-semibol transition-all duration-300 ease-in-out'>About Us</ol>
                    </Link>

                    {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                    <NavLink to='/contact'>
                        <ol className='text-[#3e4095]  hover:text-[#000000] cursor-pointer font-semibol transition-all duration-300 ease-in-out'>Contact Us</ol>
                    </NavLink>

                    {/* <NavLink to="/firststep">
                        <button className=' px-4 py-3 bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out hover:px-5 hover:py-4'>
                            FIRST STEP!
                        </button>
                    </NavLink> */}
                </li>

                

            { dropdown ?
                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-black relative z-50 p-1 rounded-md bg-white" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-black shadow-md bg-white p-1 rounded-md ml-[6px] relative z-50" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>
            {/* </div> */}

        </div>

        {/* {
            dropdown ? */}

            <div className={` ${dropdown ? 'transform translate-x-0' : 'transform -translate-y-full'} lg:hidden w-full h-[100vh] absolute bg-whit backdrop-blur-m bg-black bg-opacity-60 top-0 transition-all ease-in-out z-30 duration-300`} onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute ">
                    {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
                        <NavLink to="/">
                            <ol className='text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                        </NavLink>

                        <Link  offset={-100} smooth={true} duration={800} to="products">
                        {/* <NavLink to='/'> */}
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Our Products</ol>
                        </Link>

                        <Link offset={-100} smooth={true} duration={900} to="footer">
                            <ol className='text-white  hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>About Us</ol>
                        </Link>

                        {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                        <NavLink to='/contact'>
                            <ol className='text-white  hover:text-[#eedfb0s] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact Us</ol>
                        </NavLink>

                        {/* <NavLink to="/firststep">
                            <button className='w-[150px] bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-pulse  rounded-[60px]'>
                                FIRST STEP!
                            </button>
                        </NavLink> */}
                    {/* </li> */}
                </div>
            </div>

            {/* :
                null
        } */}

        <div className='w-[100%] h-[50%] flex justify-center items-center bg-orange-40 shadow-m border-b-[1px] border-b-gray-300 relative'>
            <div className='w-[90%] flex items-center gap-[70px] '>
                    {  dropdown2 ?
                        
                        null
                    : 
                        <div className='text-[25px] text-[#3e4095] p-1 rounded-md bg-white cursor-pointer md:cursor-not-allowed' onClick={showDropdown2}>
                            <MdOutlineMenu />
                        </div>
                    }

                <div className='hidden md:flex justify-between items-center gap-[30px]'>
                    <a href="" className='text-black hover:text-white'>Televisions</a>
                    <a href="" className='text-black hover:text-white'>Generators</a>
                    <a href="" className='text-black hover:text-white'>Fans</a>
                    <a href="" className='text-black hover:text-white'>Fridge</a>
                    <a href="" className='text-black hover:text-white'>Doors</a>
                    <a href="" className='text-black hover:text-white'>Wires</a>
                </div>

                <div className={` ${dropdown2 ? 'transform translate-x-0' : 'transform -translate-x-full'} md:hidden w-[270px] h-[450px] absolute bg-[#3e4095] backdrop-blur-m bg-whit bg-opacity-90 shadow-md top-0 left-0 flex flex-col gap-[10px] transition-all ease-in-out z-30 duration-300 p-[20px] `} onClick={showDropdown2}>

                    <div className='text-[25px] mb-[20px] text-black bg-white rounded-md p-1 absolute right-[20px] top-[23px]' onClick={showDropdown2}>
                        <MdClose />
                    </div>

                    <h1 className='font-bold text-[16px] text-[#3e4095] bg-white p-2 rounded-md'>
                        All Available Products
                    </h1>

                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[15px]"><PiTelevisionSimpleLight /></span>Televisions</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[15px]"><GiPowerGenerator /></span>Generators</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[15px]"><MdOutlineKitchen /></span>Air Conditioners</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[15px]"><RiHomeWifiLine /></span>Home Appliances</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[15px]"><FaKitchenSet /></span>Kitchen Appliances</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[20px]"><RiArmchairFill /></span>Furnitures</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[20px]"><GiTheaterCurtains /></span>Decorations</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[20px]"><PiLightbulbFilamentThin /></span>Bulbs & Lights</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[20px]"><LuCable /></span>Cables & Wires</a>
                    <a href="" className='text-white hover:text-white flex items-center gap-4'><span className="text-[20px]"><IoGameControllerOutline /></span>Games & Accessories</a>
                </div>
            </div>
        </div>

                    
    </div>
  )
}

export default Header;

// #80c41c
// #3d82b3