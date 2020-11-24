import React, { Component } from "react";
import "./slider.css";
import forme from "../../images/forme.png";
import jeans from "../../images/joggers.png";
import tshirts from "../../images/t-shirts.png";
import shirts from "../../images/shirts.png";
import trousers from "../../images/pants.png";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDisable: true,
      nextDisable:
        this.refs && this.refs.offsetWidth >= this.refs.scrollWidth
          ? true
          : false,
    };
  }
  componentDidMount() {
    this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
  }
  checkButtons = (offsetWidthValue, scrollWidthValue) => {
    this.setState({
      prevDisable: this.refs.scrollLeft <= 0 ? true : false,
      nextDisable:
        this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue
          ? true
          : false,
    });
    console.log("prevos", this.state.prevDisable);
    console.log("next", this.state.nextDisable);
  };

  render() {
    const offsetWidthValue = this.refs.offsetWidth,
      scrollWidthValue = this.refs.scrollWidth;
    return (
      <div
        className="slider-container"
        ref={(el) => {
          this.refs = el;
        }}
      >
        <div className="slider-wrapper">{this.props.children}</div>
        <div
          className={`btn prev ${this.state.prevDisable ? "disable" : ""}`}
          disabled={this.state.prevDisable}
          onClick={() => {
            this.refs.scrollLeft -= offsetWidthValue / 2;
            this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
        >
          {"<"}
        </div>
        <div
          className={`btn next ${this.state.nextDisable ? "disable" : ""}`}
          disabled={this.state.nextDisable}
          onClick={() => {
            this.refs.scrollLeft += offsetWidthValue / 2;
            this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
        >
          {">"}
        </div>
      </div>
    );
  }
}

class SliderParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: document.body.clientWidth,
    };
  }
  updateDimensions = () => {
    this.setState({ isMobile: document.body.clientWidth });
  };
  componentWillMount = () => {
    this.updateDimensions();
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };
  render() {
    let data = [
      {
        image: forme,
        css: {
          backgroundColor: "lightgrey",
          width: "4.5em",
          height: "4.5em",
          borderRadius: "3.5rem",
        },
        cssres: {
          backgroundColor: "lightgrey",
          width: "2.5em",
          height: "2.5em",
          borderRadius: "3.5rem",
        },
        text: "Forme",
      },
      {
        image: jeans,
        css: {
          backgroundColor: "rgb(220 240 244)",
          width: "4.5em",
          height: "4.5em",
          borderRadius: "3.5rem",
        },
        cssres: {
          backgroundColor: "rgb(220 240 244)",
          width: "2.5em",
          height: "2.5em",
          borderRadius: "3.5rem",
        },
        text: "Jeans",
      },
      {
        image: tshirts,
        css: {
          backgroundColor: "rgb(255 214 238)",
          width: "4.5em",
          height: "4.5em",
          borderRadius: "3.5rem",
        },
        cssres: {
          backgroundColor: "rgb(255 214 238)",
          width: "2.5em",
          height: "2.5em",
          borderRadius: "3.5rem",
        },
        text: "Tshirts",
      },
      {
        image: shirts,
        css: {
          backgroundColor: "lightgrey",
          width: "4.5em",
          height: "4.5em",
          borderRadius: "3.5rem",
        },
        cssres: {
          backgroundColor: "lightgrey",
          width: "2.5em",
          height: "2.5em",
          borderRadius: "3.5rem",
        },
        text: "Shirts",
        style: { width: "2.5rem" },
        styleres: { width: "1.5rem" },
      },
      {
        image: trousers,
        css: {
          backgroundColor: "rgb(251 245 234)",
          width: "4.5em",
          height: "4.5em",
          borderRadius: "3.5rem",
        },
        cssres: {
          backgroundColor: "rgb(251 245 234)",
          width: "2.5em",
          height: "2.5em",
          borderRadius: "3.5rem",
        },
        text: "Trousers",
        style: { width: "2rem" },
        styleres: { width: "1.5rem" },
      },
      {
        image: forme,
        css: {
          backgroundColor: "lightgrey",
          width: "4.5em",
          height: "4.5em",
          borderRadius: "3.5rem",
        },
      },
      {
        image: jeans,
        css: { backgroundColor: "lightgrey" },
      },
      {
        image: tshirts,
        css: { backgroundColor: "lightgrey" },
      },
      {
        image: shirts,
        css: { backgroundColor: "lightgrey" },
      },
      {
        image: trousers,
        css: { backgroundColor: "lightgrey" },
      },
      {
        image: forme,
        css: { backgroundColor: "lightgrey" },
      },
    ];

    return (
      <div className="parent">
        <Slider>
          {data.map((value, i) => {
            console.log("re", i);
            return (
              <div key={i} className="child">
                <div
                  style={this.state.isMobile <= 360 ? value.cssres : value.css}
                >
                  <img
                    style={
                      this.state.isMobile <= 360 ? value.styleres : value.style
                    }
                    src={value.image}
                  />
                </div>
                <p className="sliderPara">{value.text}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SliderParent;
