import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    let author = props.author;
    console.log(author);

    this.state = { overview: [] };
  }

  addToOverview = (data) => {
    this.state.overview.concat(data);
  };

  render() {
    return <div>${this.props.author}</div>;
  }
}

export default Overview;
