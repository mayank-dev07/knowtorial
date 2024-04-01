"use client";
import React from "react";
import "./checkbox.css";
import { Icon } from "@iconify/react";
import Slides from "./Slides";

const Main = () => {
  return (
    <>
      <section className="w-full flex  justify-center py-16">
        <div className="container rounded-[80px] bg-[#D8DFE4] flex flex-col justify-center ">
          <h1 className="px-8 text-3xl md:text-5xl font-semibold text-center py-8">
            Experience learning at our
            <span className="text-[#FF6905]"> centres near you!</span>
          </h1>
          <div className="w-full flex pb-8 flex-col md:flex-row justify-center">
            <div className="md:w-4/12 flex justify-center items-center">
              <img src="/map.png" alt="" className="transform object-cover" />
            </div>
            <div className="md:w-7/12 flex flex-col justify-center px-5 md:px-2">
              <p className="text-lg md:w-11/12">
                Our ever-growing number of centers, spread across India, are a
                melting pot of absolute. They are hubs for academic excellence
                where dreams are nurtured, skills are honed, and futures are
                built.
              </p>
              <div className="py-4">
                <div className="flex items-center">
                  <Icon
                    icon="teenyicons:tick-small-solid"
                    className="text-[#FF6905] bg-white rounded-full border-black border-[1px] text-lg"
                  />
                  <p className="px-2 rounded-full">
                    Personalized learning from top educators in your very own
                    city
                  </p>
                </div>
                <br />
                <div className="flex items-center">
                  <Icon
                    icon="teenyicons:tick-small-solid"
                    className="text-[#FF6905] bg-white rounded-full border-black border-[1px] text-lg"
                  />
                  <p className="px-2">
                    State-of-the-Art Facilities with latest technologies
                  </p>
                </div>
                <br />
                <div className="flex items-center">
                  <Icon
                    icon="teenyicons:tick-small-solid"
                    className="text-[#FF6905] bg-white rounded-full border-black border-[1px] text-lg"
                  />
                  <p className="px-2">Unparalleled in-person experience</p>
                </div>
                <br />
              </div>
              <div className=" w-11/12 md:w-9/12 flex flex-col justify-center md:justify-start items-center md:items-start">
                <p className="text-[#FF6905] text-3xl tracking-widest">
                  Checkout the centre closest to you
                </p>
                <div className="flex flex-col w-8/12 pt-2">
                  <div className="w-full flex items-center">
                    <select
                      id="dropdown1"
                      className="appearance-none block focus:border-transparent focus:outline-none my-2 py-2.5 px-2 border-1 border-[#FF6905] rounded-lg bg-[#D8DFE4] ring-2 ring-[#FF6905] w-full tracking-widest text-[#8B8886]"
                    >
                      <option value="" disabled selected>
                        City
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                    </select>
                    <Icon
                      icon="eva:arrow-ios-downward-outline"
                      className="text-2xl relative right-[30px] text-[#8B8886]"
                    />
                  </div>
                  <div className="w-full flex items-center">
                    <select
                      id="dropdown1"
                      className="appearance-none block focus:border-transparent focus:outline-none my-2 py-2.5 px-2 border-1 border-[#FF6905] rounded-lg bg-[#D8DFE4] ring-2 ring-[#FF6905] w-full tracking-widest text-[#8B8886]"
                    >
                      <option value="" disabled selected>
                        Preferred program
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                    </select>
                    <Icon
                      icon="eva:arrow-ios-downward-outline"
                      className="text-2xl relative right-[30px] text-[#8B8886]"
                    />
                  </div>
                </div>
                <div className="flex px-12 py-6">
                  <button className="rounded-2xl border-2 border-[#FF6905] text-white bg-[#FF6905] py-1.5 px-8">
                    Find&nbsp;a&nbsp;center&nbsp;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center ">
        <div className="w-8/12">
          <p className="text-center text-3xl md:text-4xl">
            Not sure which course is for you? <br />
            Checkout these &nbsp;
            <span className="underline text-[#FF6905]">FREE lectures</span>
            &nbsp;to help you choose!
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center container  py-12">
          <div className="py-4 lg:py-0 flex justify-center items-center">
            <div className="w-11/12 h-[300px] bg-[#D8DFE4] relative rounded-[20px] flex justify-center items-center">
              <span className="w-[32px] h-[32px] bg-white absolute"></span>
              <Icon
                className="z-20"
                icon="ic:baseline-play-circle"
                style={{ color: "#FF6905", fontSize: "70px" }}
              />
            </div>
          </div>
          <div className="py-4 lg:py-0 flex justify-center items-center">
            <div className="w-11/12 h-[300px] bg-[#D8DFE4] relative rounded-[20px] flex justify-center items-center">
              <span className="w-[32px] h-[32px] bg-white absolute"></span>
              <Icon
                className="z-20"
                icon="ic:baseline-play-circle"
                style={{ color: "#FF6905", fontSize: "70px" }}
              />
            </div>
          </div>{" "}
          <div className="py-4 lg:py-0 flex justify-center items-center">
            <div className="w-11/12 h-[300px] bg-[#D8DFE4] relative rounded-[20px] flex justify-center items-center">
              <span className="w-[32px] h-[32px] bg-white absolute"></span>
              <Icon
                className="z-20"
                icon="ic:baseline-play-circle"
                style={{ color: "#FF6905", fontSize: "70px" }}
              />
            </div>
          </div>{" "}
          <div className="py-4 lg:py-0 flex justify-center items-center">
            <div className="w-11/12 h-[300px] bg-[#D8DFE4] relative rounded-[20px] flex justify-center items-center">
              <span className="w-[32px] h-[32px] bg-white absolute"></span>
              <Icon
                className="z-20"
                icon="ic:baseline-play-circle"
                style={{ color: "#FF6905", fontSize: "70px" }}
              />
            </div>
          </div>
        </div>
        <button className="rounded-2xl border-2 border-[#FF6905] text-white bg-[#FF6905] py-1.5 px-3">
          Explore&nbsp;More&nbsp;&gt;
        </button>
      </section>

      <Slides />
    </>
  );
};

export default Main;
