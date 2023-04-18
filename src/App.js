import React from "react";
import Home from './components/Home';
import "./App.css"
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Footer />
      </div>
  );
}

export default App;
