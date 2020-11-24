import React, { Component } from "react";
import "./Footer.css";
import "../../fonts/jost.css";
import {
  MadeupBranding,
  Facebookicon,
  Instagramicon,
  Youtubeicon,
  Mailicon,
  Mobicon,
} from "../Icons/Index";
import Link from '../../Link';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <div>
            <div className="gridContents">
              <a href="#" className="grid-anchor">About Us</a>
              <a href="#" className="grid-anchor">Delivery Information</a>
              <a href="#" className="grid-anchor">Return & Exchange</a>
              <a href="#" className="grid-anchor">Technical & Privacy</a>
              <a href="#" className="grid-anchor">Order Status</a>
            </div>
          </div>
          <div className="brand">
          <Link href="/" className="madeup-anchor"><MadeupBranding /></Link>
            <p>Stay in touch with Us</p>
            <div className="gridRwd">
              <a href="./instagram">
              <Facebookicon /> 
              </a>
              <a href="./instagram">
              <Instagramicon />
              </a>
              <a href="./instagram">
                <Youtubeicon />
              </a>
            </div>
          </div>
          <div>
            <div className="gridContents">
              <h5 className="grid-txt-header">Our Corporate Office</h5>
              <p className="grid-txt">
                No: 7,A2B road, Adayar Rajpuram,
                <br /> T-Nagar,Chennai - 642002.
              </p>
              <p className="grid-txt-contact">
                <Mailicon />
                sales@madeup.com
              </p>
              <p className="grid-txt-mobi">
                <Mobicon />
                044 9999 9999
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
