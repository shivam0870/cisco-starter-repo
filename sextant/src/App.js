import React from "react";
import './index.css'
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";
import Address from "./components/Address/Address";
import Connect  from './components/Connect/PylonConnect';

const App = () => {
  return (
    <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <Address url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <Address url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Pylon Packet Latency">
                    <Connect />
                </Exhibit>
            </div>
  );
};

export default App;
