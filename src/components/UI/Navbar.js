import React from "react";
import Container from "./Containers/Container";

export default function Navbar() {
  return (
    <Container classes="my-3 md:my-0 h-20 flex lg:flex-row flex-col justify-between items-center absolute top-0">
      <div id="logo">
        <p className="sub-heading-med-m">m-haris-n</p>
      </div>
      <div
        id="menu"
        className="flex flex-row lg:w-2/6 md:w-3/6 w-full justify-between"
      >
        <a href="#" className="text-body-light-m">About</a>
        <a href="#" className="text-body-light-m">Portfolio</a>
        <a href="#" className="text-body-light-m">Contact</a>
      </div>
    </Container>
  );
}
