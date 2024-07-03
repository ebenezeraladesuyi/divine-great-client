/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { Helmet } from "react-helmet-async";
import conImg from "../../assets/images/logo/contact.svg";
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const Contact = () => {

  const [loading] = React.useState(false);

  return (
    <>

    <Helmet>
        <title>Contact/Talk to us @ Divine Great Electrical & Electronics Nig.</title>
        <meta name="description" content="Shop the best electrical and electronics appliances, such as generators, furnitures, wires and cables, kitchen and household appliances, interior decor etc. in Ado-Ekiti" />
        <link rel="canonical" href="/contact" />
      </Helmet>
    
      <div id="" className="w-full md:h-[100vh] flex flex-col justify-center items-center font-mont py-[30px] relative overflow-hidden bg-white">
        <div className="w-[90%] z-10 flex flex-col md:flex-row-reverse justify-center md:justify-between items-center md:mt-[50px] lg:mt-[70px] gap-5 mt-[50px]">

          <div className="w-full md:w-[60%]">
            { loading ? 
              (<>
                <DatasIsaLoading />
              </>) 
            : 
              (
              <img className="w-full text-[#3e4095]" src={conImg} alt="" />
              )
            }
          </div>

          <form action="" className="w-full md:w-[38%] flex flex-col gap-4 items-center">

            <h2 className="text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#3e4095] animate-bounce text-center md:text-left">CONTACT US</h2>

            <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#3e4095]" type="text" name="" id="" placeholder="Name" />

            <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#3e4095]" type="email" name="" id="" placeholder="Email" />

            <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#3e4095]" name="" id="" placeholder="Enter your message" />

            <button type="submit" className="bg-[#3e4095] hover:bg-transparent text-white rounded-md font-bold w-full hover:border-[1px] hover:border-[#3e4095] hover:text-[#3e4095]  transition-all duration-300 ease-in-out'">
                Submit
            </button>

            <h3 className="text-[14px] font-bold mt-[40px]">
              Chat with us directly on <a className="text-[#3e4095] border-[1px] border-[#3e4095] p-2 rounded-md hover:text-black" href="">Whatsapp</a>
            </h3>

          </form>

        </div>
      </div>
    </>
  )
}

export default Contact