import React, { Component } from "react";
import "./menucontainer.css";
import "../../fonts/jost.css";
import Link from '../../Link';
import {CloseMenu} from '../Icons/Index'
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
    isMenuOpen:false
    }
  }
 
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <div
        className={`sidebar-menu ${
          this.props.isMenuOpen == !this.state.isMenuOpen ? " open" : "hide"
        }`}
      >
        <button className="closeButton" onClick={this.toggleMenu} ><CloseMenu/></button>
        <ul className="vertical menu">
          <li>
            <Link className="profile-anchor"  href="/profile"><span onClick={this.toggleMenu} className="highlight">MY PROFILE</span></Link>
          </li>
          <li>
            <a>MY WISHLIST</a>
          </li>
          <li>
            <a>MY ORDERS</a>
          </li>
          <li>
            <a>MY ADDRESSES</a>
          </li>
        </ul>
        <ul className="vertical-brand menu">
          <li>
            <a><span className="highlight">THE BRAND</span></a>
          </li>
          <li>
            <a>THE MADEUP STORY</a>
          </li>
          <li>
            <a>FRANCHIES AND SUPPLIEDS</a>
          </li>
          <li>
            <a>STORE LOCATOR</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
