import React from "react";
import Socialbar from "./UI/Socialbar";
import Button from "./UI/Button";

import downArrow from "../assets/icons/down-arrow.svg";
import manVector from "../assets/img/manVector.png";

export default function FirstSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center">
        <div className="h-[160px]"></div>
      <div className="my-container flex flex-row justify-center md:justify-between items-center">
        <div className="w-5/6 lg:w-3/6 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
          <p className="heading text-center md:text-left">Hey. I'm Haris</p>
          <div className="w-32 h-1 bg-white my-4"></div>
          <p className="sub-heading-reg-m text-center md:text-left">A Web Engineering Enthusiast</p>
            </div>
          <Button>Know more</Button>
        </div>
        <img src={manVector} alt="" className="hidden xl:block xl:w-2/5" />
        <Socialbar direction="col"/>
      </div>
      <button>
        <img
          src={downArrow}
          alt=""
          width={`50px`}
          className="my-3 opacity-60 hover:opacity-100 transition-all"
        />
      </button>
    </div>
  );
}
