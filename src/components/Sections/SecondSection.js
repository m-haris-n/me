import React from "react";
import worldVector from "../../assets/img/worldVector.png";
import Button from "../UI/Button";
import downArrow from "../../assets/icons/down-arrow.svg";

export default function SecondSection(props) {
  return (
    <div
      id="secondSection"
      className="w-full h-screen flex flex-col justify-between items-center"
    >
      <div className="h-[160px]"></div>
      <div className="my-container flex flex-row justify-center lg:justify-end md:items-center">
        <img
          src={worldVector}
          alt=""
          className="hidden xl:block xl:w-3/6 relative left-[-450px]"
        />
        <div className="w-5/6 lg:w-3/6 flex flex-col items-center md:items-end">
          <div className="flex flex-col items-center md:items-end">
            <p className="heading text-center md:text-right">Get to know me</p>
            <div className="w-32 h-1 bg-white my-4"></div>
            <p className="sub-heading-reg-m text-center md:text-right">
              I am a web engineering enthusiast. In 2020, I co-founded Citeous Technologies (Pvt.) Ltd. <br />
              Currently, I am a full stack web developer. <br /><br />
              I took a long path to get here. Wanna know more?
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <Button>Learning path</Button>
            <div className="w-10 h-0"></div>
            <Button>Experiences</Button>
          </div>
        </div>
      </div>
      <a href={props.linkTo}>
        <button>
          <img
            src={downArrow}
            alt=""
            width={`50px`}
            className="my-3 opacity-60 hover:opacity-100 transition-all"
          />
        </button>
      </a>
    </div>
  );
}
