// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersCard from "../../components/static/PartnersCard";

import sony from "../../assets/images/partners/sony.png";
import asus from "../../assets/images/partners/asus.png";
import bosch from "../../assets/images/partners/bosch.png";
import hp from "../../assets/images/partners/hp.png";
import lg from "../../assets/images/partners/lg.png";
import panasonic from "../../assets/images/partners/panasonic.png";
import playstation from "../../assets/images/partners/playstation.png";
// import samsung from "../../assets/images/partners/samsung.png";
import elepaq from "../../assets/images/partners/elepaq.png";
import hisense from "../../assets/images/partners/hisense.png";

const Partners = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        // rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 3,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

  return (
    <div className="w-full h-[35vh] py-[30px flex justify-center items-center overflow-hidden bg-white">
        <div className="w-[90%]  bg-gray-300 mt-[30px] md:mt-0">

            <Slider {...settings}>

                <PartnersCard 
                    image={sony}
                />
                <PartnersCard  
                    image={asus}
                />
                <PartnersCard  
                    image={bosch}
                />
                <PartnersCard  
                    image={hp}
                />
                <PartnersCard  
                    image={panasonic}
                />
                <PartnersCard  
                    image={playstation}
                />
                {/* <PartnersCard  
                    image={samsung}
                /> */}
                <PartnersCard  
                    image={elepaq}
                />
                <PartnersCard  
                    image={lg}
                />
                <PartnersCard  
                    image={hisense}
                />

                {/* <div className="w-[100px]">
                    <div className="w-full h-"><img className="w-full" src={sony} alt="" /></div>
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={asus} alt="" />
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={bosch} alt="" />
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={hp} alt="" />
                </div>
                <div className="w-[50px]">
                    <img className="w-full" src={lg} alt="" />
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={elepaq} alt="" />
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={panasonic} alt="" />
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={playstation} alt="" />
                </div>
                <div className="w-[100px]">
                    <img className="w-full" src={samsung} alt="" />
                </div> */}

            </Slider>

            <hr className="w-full border-[1px] mt-[20px] border-gray-300" />
        </div>
    </div>
  )
}

export default Partners