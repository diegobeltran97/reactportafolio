import React, { Component } from "react";
import Uconstruction from "./Components/pages/Uconstruction"
import MAbout from "./Components/pages/MAbout";
import "./Utilities/css/App.css";
import Header from "./Components/layout/Header";
import HomePage from "./Components/layout/HomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    var pages = [HomePage];
    return (
      <Router>
        <div className="App">
          <Header />
          
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={MAbout} />
          <Route path="/blog" component={Uconstruction} />
          <Route path="/projects" component={Uconstruction} />
          <Route path="/contact" component={Uconstruction} />

        </div>
      </Router>
    );
  }
}

export default App;
