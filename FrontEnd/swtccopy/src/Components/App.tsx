import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import News from "./News";
import Upcoming from "./Upcoming";
import Header from "./Header";
import Campus from "./Campus";
import QuickLinks from "./QuickLinks";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  return (
    <div className="App text-white font-sans tracking-widest">
      <Header />
      <Campus />
      <QuickLinks />
      <Upcoming />
      <News />
      <Footer />
    </div>
  );
}

export default App;
