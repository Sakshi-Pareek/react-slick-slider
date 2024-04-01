import React from "react";
import Slider from "react-slick";
import Profile from "../assets/images/webp/girlwithopenhairs.webp";
import { NextArrow, PrevArrow, StarIcons } from "./Icons";

const Slides = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[77px] xl:pb-[85px] md:py-20 sm:py-14 py-12">
        <h2
          className="text-black text-[20px] font-medium leading-[120%] lg:mb-[19px] mb-4 text-center"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          TESTIMONIALS
        </h2>
        <p
          className="text-[#025066] lg:text-[48px] sm:text-[32px] text-[28px] font-bold leading-[118%] text-center lg:mb-12 mb-6"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          What Clients say about us
        </p>
        <div
          className="flex"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <div className="md:w-2/12 w-[10%] flex flex-col items-start">
            <button
              className="ml-auto mt-[55px]"
              onClick={() => slider?.current?.slickPrev()}
            >
              <PrevArrow />
            </button>
          </div>
          <div className="md:w-8/12 w-[80%]">
            <Slider ref={slider} {...settings}>
              <div className="text-center">
                <img
                  src={Profile}
                  alt="Profile"
                  className="mx-auto"
                  width="126"
                  height="126px"
                />
                <h3 className="text-[#025066] text-base font-bold leading-[122%] lg:mt-[19px] mt-4 lg:mb-[30px] mb-4">
                  TREGSDKH
                </h3>
                <StarIcons />
                <p className="lg:mt-[19px] mt-4 sm:text-[16px] xs:text-sm text-xs max-w-[470px] font-normal text-[#4E8594] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                  convallis lobortis. Proin ullamcorper eros ac ultrices
                  imperdiet.
                </p>
              </div>
              <div className="text-center">
                <img
                  src={Profile}
                  alt="Profile"
                  className="mx-auto"
                  width="126"
                  height="126px"
                />
                <h3 className="text-[#025066] text-base font-bold leading-[122%] lg:mt-[19px] mt-4 lg:mb-[30px] mb-4">
                  TREGSDKH
                </h3>
                <StarIcons />
                <p className="lg:mt-[19px] mt-4 sm:text-[16px] xs:text-sm text-xs max-w-[470px] font-normal text-[#4E8594] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                  convallis lobortis. Proin ullamcorper eros ac ultrices
                  imperdiet.
                </p>
              </div>
            </Slider>
          </div>
          <div className="md:w-2/12 w-[10%]">
            <button
              className="mt-[55px]"
              onClick={() => slider?.current?.slickNext()}
            >
              <NextArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slides;
