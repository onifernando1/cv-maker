import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Experience";
import Experience from "./components/Experience";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  create = () => {
    console.log("create function");
  };

  hello = () => {
    console.log("hello");
  };

  render() {
    return (
      <div>
        <General create={create} />
        <Education />
        <Experience />
        <Overview author="bob" />
      </div>
    );
  }
}

export default App;
