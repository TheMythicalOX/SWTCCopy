import React from "react";
import Footer from "./Footer";
import News from "./News";
import Upcoming from "./Upcoming";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="font-bold underline">Hello World</p>
        <Header />
        <Upcoming />
        <News />
        <Footer />
      </header>
    </div>
  );
}

export default App;
