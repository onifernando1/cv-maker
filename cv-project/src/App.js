import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Experience";
import Experience from "./components/Experience";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = { general: "" };
  }

  saveGeneral = (info = "") => {
    console.log("save general");
    this.setState({ general: info });
    console.log(this.state);
    console.log();
  };

  // hello = () => {
  //   console.log("hello");
  // };

  render() {
    return (
      <div>
        <General />
        {/* <Education /> */}
        {/* <Experience /> */}
        {/* <Overview author="bob" /> */}
      </div>
    );
  }
}

export default App;
