import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <label for="school-name">School/University Name:</label>
          <input type="text" name="school-name" id="school-name"></input>
          <label for="course">Course:</label>
          <input type="text" name="course" id="last-name"></input>
          <label for="grade">Grade:</label>
          <input type="text" name="grade" id="grade"></input>
          <label for="school-start-date">Start date:</label>
          <input
            type="date"
            name="school-start-date"
            id="school-start-date"
          ></input>
          <label for="school-end-date">End date:</label>
          <input
            type="date"
            name="school-end-date"
            id="school-end-date"
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Education;
