import React, { Component } from "react";
import "./assets/css/App.css";
import PrimerComponente from "./components/PrimerComponente";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
          <PrimerComponente/>
        </div>
      </div>
    );
  }
}

export default App;
