import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.js";
// import Slider from "./components/slider.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Navbar} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
