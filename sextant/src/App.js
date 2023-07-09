import React from "react";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";
import Address from "./components/Address/Address";

const App = () => {
  return (
    <div>
      <Banner />
       
                <Exhibit name="Public IPv4 Address">
                    <Address url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <Address url='https://api64.ipify.org?format=json' />
                </Exhibit>
    </div>
  );
};

export default App;
