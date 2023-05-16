import React from "react";
import Header from "./components/Header";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container" >
      <Header />
      <div className="main" >
      <Left />
      <Center />
      <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
