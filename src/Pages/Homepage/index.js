import React from "react";
import Section from "../../Components/Sections/Section";
import Article from "../../Components/Article/Article";
import Testimonials from "../../Components/Testimonials/Testimonials";

function pages() {
  return (
    <div className="App">
      <Article />
      <Section />
      <Testimonials />
    </div>
  );
}

export default pages;
