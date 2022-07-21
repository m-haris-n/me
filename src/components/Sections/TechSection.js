import React from "react";

import downArrow from "../../assets/icons/down-arrow.svg";

import cssLogo from "../../assets/logos/css-logo.svg";
import jsLogo from "../../assets/logos/js-logo.svg";
import mysqlLogo from "../../assets/logos/mysql-logo.svg";
import htmlLogo from "../../assets/logos/html-logo.svg";
import pythonLogo from "../../assets/logos/python-logo.svg";
import phpLogo from "../../assets/logos/php-logo.svg";
import tailwindLogo from "../../assets/logos/tailwindcss-logo.svg";
import bootstrapLogo from "../../assets/logos/bootstrap-logo.svg";
import reactLogo from "../../assets/logos/react-logo.svg";
import reduxLogo from "../../assets/logos/redux-logo.svg";
import nodejsLogo from "../../assets/logos/nodejs-logo.svg";
import nextjsLogo from "../../assets/logos/nextjs-logo.svg";
import djangoLogo from "../../assets/logos/django-logo.svg";
import mongodbLogo from "../../assets/logos/mongodb-logo.svg";

export default function TechSection(props) {
  const frontend = [
    <div className="tech-logos">
      <img src={tailwindLogo} alt="" className="h-full" />
    </div>,
    <div className="tech-logos">
      <img src={bootstrapLogo} alt="" className="h-full" />
    </div>,
    <div className="tech-logos">
      <img src={reactLogo} alt="" className="h-full" />
    </div>,
    <div className="tech-logos">
      <img src={reduxLogo} alt="" className="h-full" />
    </div>,
  ];

  const backend = [
    <div className="tech-logos">
      <img src={nodejsLogo} alt="" className="h-full" />
    </div>,
    <div className="tech-logos">
      <img src={nextjsLogo} alt="" className="h-full" />
    </div>,
    <div className="tech-logos">
      <img src={djangoLogo} alt="" className="h-full" />
    </div>,
    <div className="tech-logos">
      <img src={mongodbLogo} alt="" className="h-full" />
    </div>,
  ];
  return (
    <div
      id="techSection"
      className="w-full min-h-screen flex flex-col justify-between items-center"
    >
      <p className="heading my-5 text-center">Technologies I work in</p>
      <div className={`my-container grid gap-y-16 grid-cols-2 md:grid-cols-3`}>
        <div className="tech-logos">
          <img src={jsLogo} alt="" className="h-full" />
        </div>
        {frontend} {backend}
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
