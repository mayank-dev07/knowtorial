import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";

const Slides = () => {
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-evenly items-center relative py-12">
        <div className="container relative flex justify-center items-center">
          <div className="w-full h-[290px] rounded-[20px] bg-[#FF6905] ">
            <p className=" text-center text-white font-semibold text-4xl py-8">
              Meet our top mentors
            </p>
            <div className="absolute top-[200px] xl:left-[20px] lg:left-[10px] md:left-[10px] sm:left-[60px] left-[14px] z-30 border-[1px] w-[30px] h-[30px] rounded-full flex justify-center items-center border-[#401A01] text-[#401A01]">
              <button onClick={handlePrevious} className="text-2xl lg:text-xl">
                <LeftOutlined />
              </button>
            </div>
            <div className="absolute top-[200px] xl:right-[20px] lg:right-[10px] md:right-[10px] sm:right-[60px] right-[14px] z-30 border-[1px] w-[30px] h-[30px] rounded-full flex justify-center items-center border-[#401A01] text-[#401A01]">
              <button onClick={handleNext} className="text-2xl lg:text-xl">
                <RightOutlined />
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1040: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            className="mySwiper md:!w-11/12 sm:!w-6/12 !w-9/12 !container !flex !justify-center !items-center !absolute !top-[80px]"
          >
            <SwiperSlide className="py-8 !flex !flex-col !justify-center !items-center">
              <div className="h-[280px] w-[300px] bg-[#D9D9D9] rounded-[20px] z-20"></div>
              <div className="w-[300px] h-[180px] rounded-[20px] border-2 relative top-[-25px] mb-12 px-4">
                <p className="capitalize mt-6  text-lg font-semibold">
                  full name
                </p>
                <div className="flex mt-12 ">
                  <Icon icon="lets-icons:time-light" className="text-2xl" />
                  <span className="font-semibold">&nbsp;5 Years</span>
                </div>
                <div className="flex my-4 text-xl">
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FFE1CD]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-8 !flex !flex-col !justify-center !items-center">
              <div className="h-[280px] w-[300px] bg-[#D9D9D9] rounded-[20px] z-20"></div>
              <div className="w-[300px] h-[180px] rounded-[20px] border-2 relative top-[-25px] mb-12 px-4">
                <p className="capitalize mt-6  text-lg font-semibold">
                  full name
                </p>
                <div className="flex mt-12 ">
                  <Icon icon="lets-icons:time-light" className="text-2xl" />
                  <span className="font-semibold">&nbsp;5 Years</span>
                </div>
                <div className="flex my-4 text-xl">
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FFE1CD]" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className="py-8 !flex !flex-col !justify-center !items-center">
              <div className="h-[280px] w-[300px] bg-[#D9D9D9] rounded-[20px] z-20"></div>
              <div className="w-[300px] h-[180px] rounded-[20px] border-2 relative top-[-25px] mb-12 px-4">
                <p className="capitalize mt-6  text-lg font-semibold">
                  full name
                </p>
                <div className="flex mt-12 ">
                  <Icon icon="lets-icons:time-light" className="text-2xl" />
                  <span className="font-semibold">&nbsp;5 Years</span>
                </div>
                <div className="flex my-4 text-xl">
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FFE1CD]" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className="py-8 !flex !flex-col !justify-center !items-center">
              <div className="h-[280px] w-[300px] bg-[#D9D9D9] rounded-[20px] z-20"></div>
              <div className="w-[300px] h-[180px] rounded-[20px] border-2 relative top-[-25px] mb-12 px-4">
                <p className="capitalize mt-6  text-lg font-semibold">
                  full name
                </p>
                <div className="flex mt-12 ">
                  <Icon icon="lets-icons:time-light" className="text-2xl" />
                  <span className="font-semibold">&nbsp;5 Years</span>
                </div>
                <div className="flex my-4 text-xl">
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FFE1CD]" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className="py-8 !flex !flex-col !justify-center !items-center">
              <div className="h-[280px] w-[300px] bg-[#D9D9D9] rounded-[20px] z-20"></div>
              <div className="w-[300px] h-[180px] rounded-[20px] border-2 relative top-[-25px] mb-12 px-4">
                <p className="capitalize mt-6  text-lg font-semibold">
                  full name
                </p>
                <div className="flex mt-12 ">
                  <Icon icon="lets-icons:time-light" className="text-2xl" />
                  <span className="font-semibold">&nbsp;5 Years</span>
                </div>
                <div className="flex my-4 text-xl">
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FF6905]" />
                  <Icon icon="ph:star-fill" className="text-[#FFE1CD]" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Slides;
