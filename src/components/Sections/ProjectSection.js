import React, { useState } from "react";
import downArrow from "../../assets/icons/down-arrow.svg";
import Button from "../UI/Button";
import ProjectCard from "../UI/ProjectCard";

export default function ProjectSection(props) {
  const projInfo1 = {
    link: "#",
    number: "01.",
    title: "React Input Components",
    techs: "ReactJS | NodeJS | Redux",
  };

  return (
    <div
      id="projectSection"
      className="w-full min-h-screen flex flex-col justify-between items-center"
    >
      <div className="my-container flex flex-col justify-between items-center">
        <p className="heading w-full my-5 md:my-10 text-left">
          Projects I've built
        </p>
        <div className="w-full h-[500px] flex flex-col md:flex-row justify-evenly items-center">
          <ProjectCard projInfo={projInfo1} />
          <ProjectCard projInfo={projInfo1} />
          <ProjectCard projInfo={projInfo1} />
        </div>
        <Button>View All</Button>
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
