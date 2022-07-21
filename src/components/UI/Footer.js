import React from "react";
import Socialbar from "../UI/Socialbar";

export default function Footer() {
  return (
    <div className="footer w-full flex flex-col sm:flex-row justify-between items-center border-t-[2px] border-t-white py-8 mt-8">
      <div className="w-5/6 sm:w-2/6 logo-area h-40 flex flex-col justify-between items-center sm:items-start">
        <p className="sub-heading-l">m-haris-n</p>
        <p className="text-body-reg-l mb-5">A Full Stack Web Developer</p>
        <Socialbar direction="row" />
      </div>

      <div className="w-5/6 sm:w-4/6 mx-20 my-5 flex flex-row justify-between items-center">
        <p className="text-body-med-l">Home</p>
        <p className="text-body-light-m my-2">About</p>
        <p className="text-body-light-m my-2">Portfolio</p>
        <p className="text-body-light-m my-2">Contact</p>
      </div>
      
    </div>
  );
}
