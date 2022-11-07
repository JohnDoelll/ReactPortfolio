import React from "react";
import CV from "../assets/MyResume.pdf";
import { Animated } from "react-animated-css";

const CTA = () => {
  return (
    <div className="cta">
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOut"
        isVisible={true}
        animationInDuration={3000}
      >
        <a href={CV} download className="btn">
          Download CV
        </a>
      </Animated>

      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOut"
        isVisible={true}
        animationInDuration={3000}
      >
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </Animated>
    </div>
  );
};

export default CTA;
