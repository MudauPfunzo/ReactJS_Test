import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";

import { Services } from "./components/services";

import JsonData from "./data/data.json";

import "./App.css";

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
