import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeadlineCards from "./Components/HeadlineCards";
import Food from "./Components/Food";
import Category from "./Components/Category";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </>
  );
}

export default App;
