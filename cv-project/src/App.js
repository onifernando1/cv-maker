import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Experience";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
