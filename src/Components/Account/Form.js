import React, { Component } from "react";
import "./form.css";
import "../../fonts/jost.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="form-container">
        <div className="header">My Profile</div>
        <ul className="nameContainer">
          <li style={{textAlign:"left",width:"100%"}}><input className="firstName" type="text" placeholder="First Name" name="uname" required /></li>
          <li style={{textAlign:"left",width:"100%"}}><input className="lastName" type="text" placeholder="Last Name" name="uname" required /></li>
        </ul>
        <div className="mailContainer">
          <input type="email"  width="90%" placeholder="E mail" required></input>
        </div>
        <div className="numContainer">
          <input type="number"  width="90%"placeholder="Phone number" required></input>
        </div>
        <div className="passContainer">
          <input type="password"  width="90%"placeholder="Password" required></input>
        </div>
        <div className="confpassContainer">
          <input
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
        </div>
        <div className="addAddress">
          <button className="addressButton">ADD NEW ADDRESS</button>
          <button className="addressResButton">Save Changes</button>
        </div>
      </form>
    );
  }
}

export default Form;
