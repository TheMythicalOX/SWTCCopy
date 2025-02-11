import React from "react";
import Footer from "./Footer";
import News from "./News";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="font-bold underline">Hello World</p>
        <News />
        <Footer />
      </header>
    </div>
  );
}

export default App;
