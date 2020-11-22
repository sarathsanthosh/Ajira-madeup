import React from "react";
import "./section.css";
import "../../fonts/jost.css";
import "../../fonts/bankgothic.css";


const Section = () => {
  const secData = [
    { image: require("../../images/jeans.png"), title: "Polo Printed T-Shirt" },
    {
      image: require("../../images/carousel-2.png"),
      title: "Polo Printed T-Shirt",
    },
    { image: require("../../images/jeans.png"), title: "Polo Printed T-Shirt" },
    {
      image: require("../../images/carousel-2.png"),
      title: "Polo Printed T-Shirt",
    },
    { image: require("../../images/jeans.png"), title: "Polo Printed T-Shirt" },
  ];
  const secresData = [
    { image: require("../../images/jeans.png"), title: "Polo Printed T-Shirt" },
    {
      image: require("../../images/carousel-2.png"),
      title: "Polo Printed T-Shirt",
    },
    { image: require("../../images/jeans.png"), title: "Polo Printed T-Shirt" },
    {
      image: require("../../images/carousel-2.png"),
      title: "Polo Printed T-Shirt",
    },
  ];
  const secmobData = [
    { image: require("../../images/jeans.png"), title: "Polo Printed T-Shirt" },
    {
      image: require("../../images/carousel-2.png"),
      title: "Polo Printed T-Shirt",
    },
  ];

  const renderImages = (section, index) => {
    return (
      <li className="latlistCollection" key={index}>
        <img className="sec-image" src={section.image}></img>
        <p>{section.title}</p>
        <span>1,499.00</span>
      </li>
    );
  };

  return (
    <div>
      <ul className="latCollection">{secData.map(renderImages)}</ul>
      <ul className="latresCollection">
        {secresData.map(renderImages)}
      </ul>
      <ul className="latmobCollection">
        {secmobData.map(renderImages)}
      </ul>
    </div>
  );
};

export default Section;
