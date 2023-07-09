import React from "react";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";

const App = () => {
  return (
    <div>
      <Banner />
      <Exhibit name="Component1"></Exhibit>
      <Exhibit name="Component2"></Exhibit>
      <Exhibit name="Component3"></Exhibit>
      <Exhibit name="Component4"></Exhibit>
    </div>
  );
};

export default App;
