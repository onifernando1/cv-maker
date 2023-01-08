import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Experience";

class App extends Component {
  render() {
    return (
      <div>
        <General />
        <Education />
      </div>
    );
  }
}

export default App;
