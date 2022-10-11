import React from "react";
import "./Intro.css";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import boy from "../../images/boy.png";
import thumbup from "../../images/thumbup.png";
import Crown from "../../images/crown.png";

import glassesimoji from "../../images/glassesimoji.png";
import TextHover from "../texthover/TextHover"



const Intro = () => {
  return (
    <>
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi I Am</span>
          <span>Govind Suman</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            accusantium quidem sit totam quod molestiae!
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top:'-4%', left:"68%"}}>
          <TextHover image={Crown} t="hai" t1="there"/>
        </div>
        <div style={{top:"14rem" ,left:"0rem"}}>
          <TextHover image={thumbup} t="hello" t1="gs"/>
        </div>
        <div className="blur" style={{background:"rgb(236 210 235)"}}>

        </div>
        
   
        
        
      </div>
    </div>
    </>
  );
};

export default Intro;
