import React from "react";
import label from "../../images/label.png";
import "../../fonts/jost.css";
import "../../fonts/bankgothic.css";
import "./testimonials.css";
import StarRating from "../StarRating/StarRating"

const Testimony = () => {
  const secData = [
    {
      image: require("../../images/boy.png"),
      title: "Vikas",
      text:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    },
    {
      image: require("../../images/boy.png"),
      title: "Vikas",
      text:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    },
    {
      image: require("../../images/boy.png"),
      title: "Vikas",
      text:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    },
  ];
  const secresData = [
    {
      image: require("../../images/boy.png"),
      title: "Vikas",
      text:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    },
    {
      image: require("../../images/boy.png"),
      title: "Vikas",
      text:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    },
  ];
  const secmobData = [
    {
      image: require("../../images/boy.png"),
      title: "Vikas",
      text:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    },
  ];

  const renderReviews = (section, index) => {
    return (
      <div className="nav-review" key={index}>
        <img src={section.image} />
        <div className="container">
          <h4>
            <b>{section.title}</b>
            <StarRating/>
          </h4>
        
          <p>{section.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="par-test">
      <p>TESTIMONIALS</p>
      <div className="testimonialsFull">{secData.map(renderReviews)}</div>
      <div className="testimonialsRes">{secresData.map(renderReviews)}</div>
      <div className="testimonialsMob">{secmobData.map(renderReviews)}</div>
      <div className="couponsGet">
        <p className="couponPara left-coupon">GET COUPONS & STYLE GUIDES</p>
        <p className="couponPara-sub left-coupon-sub">Subcribe to our NewsLetter</p>
        <input className="couponInput" placeholder="E-mail"></input>
        <button className="couponBut" >SUBSCRIBE</button>
        <img className="test-img" src={label}></img>
      </div>
    </div>
  );
};

export default Testimony;
