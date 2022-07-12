import Wrapper from "./components/UI/Containers/Wrapper";
import Navbar from "./components/UI/Navbar";
import React from "react";
import FirstSection from "./components/Sections/FirstSection";
import SecondSection from "./components/Sections/SecondSection";

function App() {
  return (
    <Wrapper classes="bg-gradient">
      <Navbar />
      <FirstSection linkTo="#secondSection" />
      <SecondSection />
    </Wrapper>
  );
}

export default App;
