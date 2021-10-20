import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";

import { Services } from "./components/services";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation data={landingPageData.Navigation} />
      <Services data={landingPageData.Services} />
    </div>
  );
};

export default App;
