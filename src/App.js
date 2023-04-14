import React from "react";
import Home from './pages/Home';
import "./App.css"
import About from "./components/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Footer />
      </div>
  );
}

export default App;
