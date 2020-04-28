import React, { Component } from "react";
import "./assets/css/App.css";
import PrimerComponente from "./components/PrimerComponente";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
