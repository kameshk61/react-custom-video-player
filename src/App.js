import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Frame from "./components/Frame/Frame";
import Footer from "./components/Footer/Footer";

function App() {
  const [songName, setSongName] = useState("");

  const changeHandler = (name) => {
    console.log(name);
    setSongName(name);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Frame />
      <Footer />
    </div>
  );
}

export default App;
