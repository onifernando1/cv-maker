import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    // let letsCreate = this.props.create;

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    };

    // this.createForm();
  }

  hideForm = () => {
    let form = document.getElementsByClassName("form");
    form[0].classList.add("hidden");
    console.log("hidden");
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(this.state); // not working
    this.hideForm();
  };

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <label htmlFor="first-name">First Name:</label>
        <input
          onChange={this.handleFirstNameChange}
          type="text"
          name="first-name"
          id="first-name"
        ></input>
        <label htmlFor="last-name">Last Name:</label>
        <input
          onChange={this.handleLastNameChange}
          type="text"
          name="last-name"
          id="last-name"
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          onChange={this.handleEmailChange}
          type="email"
          name="email"
          id="email"
        ></input>
        <label htmlFor="address">Address:</label>
        <input
          onChange={this.handleAddressChange}
          type="address"
          name="address"
          id="address"
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default General;
