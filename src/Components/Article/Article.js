import React, { Component } from "react";
import "./article.css";
import "../../fonts/jost.css";
import headImg from "../../images/headerimg.png";
import section from "../../images/section-1.png";
import articletop from "../../images/sec-3.png";
import articlebutton from "../../images/sec-4.png";
import headerresImage from "../../images/carousel-2.png";
import { ChevLeft, Chevright } from "../Icons/Index";

const sliders = document.querySelectorAll(".slider-wrapper");

class Article extends Component {
  constructor(props) {
    super(props);

    
 
  
  }
  
 


  render() {
    return (
      <div className="slider">
        <div>
          <section className="headeroverlay">
            <p className="overlayPara main">
              Clothes that <span className="highlight">respire</span>
            </p>
            <p className="overlayPara main-down">
              For men who <span className="highlight">aspire</span>
            </p>
            <button className="overlayPara-button main-button">BROWSE COLLECTIONS</button>
            <img className="headerImage" src={headImg}></img>
            <img className="headerresImage" src={headerresImage}></img>
          </section>
          <section className="mu-section">
            <p className="overlayPara left">
              <span className="highlight">Summer</span> is here and
            </p>
            <p className="overlayPara left-down">
              so is our <span className="highlight">collections</span>
            </p>
            <img className="section-top" src={section}></img>
            <div className="mu-article">
              <p className="overlayPara right">
                <span className="highlight">Wrinkle</span> free t-shirts
              </p>
              <p className="overlayPara right-down">
                <span className="highlight">Stain-free </span>denim shirts
              </p>
              <img src={articletop}></img>
              <img src={articlebutton}></img>
            </div>
          </section>
        </div>
        <div className="latestCollections">
          <p>
            <span className="tab-1">LATEST &#160; COLLECTIONS</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
