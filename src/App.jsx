import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import Home component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CryptoTable from "./pages/CryptoTable";


const App = () => {
  return (
    <Router>
         <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listZcrypto" element={<CryptoTable />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
