import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <label for="company">Company:</label>
          <input type="text" name="company" id="company"></input>
          <label for="role">Role:</label>
          <input type="text" name="role" id="role"></input>
          <label for="text">Description:</label>
          <input type="text" name="description" id="description"></input>
          <label for="work-start-date">Start date:</label>
          <input
            type="date"
            name="work-start-date"
            id="work-start-date"
          ></input>
          <label for="work-end-date">End date:</label>
          <input type="date" name="work-end-date" id="work-end-date"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Experience;
