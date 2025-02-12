import React from "react";
import Footer from "./Footer";
import News from "./News";
import Upcoming from "./Upcoming";
import Header from "./Header";
import Campus from "./Campus";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Campus />
        <Upcoming />
        <News />
        <Footer />
      </header>
    </div>
  );
}

export default App;
