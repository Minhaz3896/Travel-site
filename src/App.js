import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Food from "./Components/Food";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Cards/>
       <Food/>
    </div>
  );
}

export default App;
