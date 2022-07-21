import React from "react";
import Socialbar from "../UI/Socialbar";

export default function Footer() {
  return (
    <div className="footer w-full flex flex-row justify-start">
      <div className="logo-area h-48 flex flex-col justify-between items-start">
        <p className="heading">m-haris-n</p>
        <p className="sub-heading-reg-m mb-5">A Full Stack Web Developer</p>
        <Socialbar direction="row" />
      </div>

      <div></div>
    </div>
  );
}
