import Wrapper from "./components/UI/Containers/Wrapper";
import Navbar from "./components/UI/Navbar";
import React from "react";
import FirstSection from "./components/Sections/FirstSection";
import SecondSection from "./components/Sections/SecondSection";
import TechSection from "./components/Sections/TechSection";
import ProjectSection from "./components/Sections/ProjectSection";
import LastSection from "./components/Sections/LastSection";



function App() {
  return (
    <Wrapper classes="bg-gradient scroll-smooth">
      <Navbar />
      <FirstSection linkTo="#secondSection" />
      <SecondSection linkTo="#techSection"/>
      <TechSection linkTo="#projectSection" />
      <ProjectSection linkTo="#lastSection" />
      <LastSection/>
    </Wrapper>
  );
}

export default App;
