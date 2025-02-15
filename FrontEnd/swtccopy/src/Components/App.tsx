import React from "react";
import Footer from "./Footer";
import News from "./News";
import Upcoming from "./Upcoming";
import Header from "./Header";
import Campus from "./Campus";
import QuickLinks from "./QuickLinks";
function App() {
  return (
    <div className="App text-white font-sans">
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
