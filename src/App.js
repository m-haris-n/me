import Wrapper from "./components/UI/Containers/Wrapper";
import Navbar from "./components/UI/Navbar";
import React from "react";
import FirstSection from "./components/FirstSection";


function App() {
  return (
    <Wrapper classes="bg-gradient">
      <Navbar />
      <FirstSection />
    </Wrapper>
  );
}

export default App;
