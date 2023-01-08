import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <label for="first-name">First Name:</label>
          <input type="text" name="first-name" id="first-name"></input>
          <label for="last-name">Last Name:</label>
          <input type="text" name="last-name" id="last-name"></input>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email"></input>
          <label for="address">Address:</label>
          <input type="address" name="address" id="address"></input>
        </form>
      </div>
    );
  }
}

export default General;
