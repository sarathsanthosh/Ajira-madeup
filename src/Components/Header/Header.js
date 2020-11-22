import React, { Component } from "react";
import Menu from "../Menucontainer/Menucontainer";
import {
  MadeupBranding,
  Search,
  Like,
  Account,
  Cart,
  MenuIcon,
} from "../Icons/Index";
import Link from "../../Link"
import "./Header.css";
import "../../fonts/jost.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      flip: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleFlip = () => {
    this.setState({
      flip: true,

    
    });
  };
  
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }


  render() {
  
    return (
      <header className="pa-grid">
        <div className="header-brand">
          <Link href="/"  onClick={(e) => {
                this.handleHomeFlip(this.state.flip);
              }}
              className="madeup-anchor"><MadeupBranding /></Link>
        </div>
        <div className="grid">
          <div className= "mu-nav">
            <div className="dropdownFeatures initial">For Me</div>
          </div>
          <div className= "mu-nav" >
            <div className="dropdownFeatures">Jeans</div>
          </div>
          <div className= "mu-nav" >
            <div className="dropdownFeatures">Shirts</div>
          </div>
          <div className= "mu-nav" >
            <div className="dropdownFeatures">T-Shirts</div>
          </div>
          <div className= "mu-nav" >
            <div className="dropdownFeatures">Trousers</div>
          </div>
          <div className= "mu-nav" >
            <div className="dropdownFeatures">Joggers</div>
          </div>
          <div className= "mu-nav" >
            <div className="dropdownFeatures">Shorts</div>
          </div>
        </div>
        <div className="home-icon-show" >
          <div  className={`${this.state.flip  ? "searchShow" :"searchNone"}`} >
            <a href="/search"><Search cssClass="homeSearch" /></a>
          </div>
          <div  className={`${this.state.flip ? "searchShow" : "searchNone"}`}>
          <a href="/cart"><Cart /></a>
          </div>
          <div className={`${this.state.flip ? "searchShow" : "searchNone"}`}>
          <a href="/favorites"><Like /></a>
          </div>
         <div className="searchShow accButdiv">
         <Link href="/profile" ><button
             className={`${
                !this.state.flip ? "accountButton" : "accountresButton"
              }`}
              onClick={(e) => {
                this.handleFlip(this.state.flip);
              }}
            >
              <Account />
            </button></Link>
          </div>
        </div>
        <div className="mobview-icon">
          <Search cssClass="homeSearch" />
          <Cart />
          <button id="roundButton" onClick={this.toggleMenu}>
            <MenuIcon />
          </button>
          <Menu id="menu-slide" isMenuOpen={this.state.isMenuOpen} />
        </div>
      </header>
    );
  }
}


export default Header;
