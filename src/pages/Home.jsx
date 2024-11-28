import React from "react";
import Hero from "../components/Hero";
import CryptoList from "../components/CryptoList";
import Earn from "../components/Earn";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div id="home">
      
      <Hero />
      <CryptoList />
      <Earn />
      <Contact/>
   
    </div>
  );
};

export default Home;
