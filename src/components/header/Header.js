import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { Wave } from "react-animated-text";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h5>Hello I'm</h5>
        <h1>
        <Wave text='Eldor Shodmonov' effect='pop' effectDuration='0.5' effectChange={2.0} />
        </h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        
      </div>
    </header>
  );
};

export default Header;
