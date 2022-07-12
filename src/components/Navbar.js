import React from "react";
import Container from "./UI/Containers/Container";

export default function Navbar() {
  return (
    <Container classes="my-3 md:my-0 h-20 flex md:flex-row flex-col justify-between items-center relative z-50">
      <div id="logo">
        <p className="sub-heading-med-m">m-haris-n</p>
      </div>
      <div
        id="menu"
        className="flex flex-row lg:w-2/6 md:w-3/6 w-full justify-between"
      >
        <p className="text-body-light-m">About</p>
        <p className="text-body-light-m">Portfolio</p>
        <p className="text-body-light-m">Contact</p>
      </div>
    </Container>
  );
}