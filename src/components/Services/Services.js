import React from "react";
import Cards from "../Cards/Cards";
import Resume from "./Resume.pdf";
import HeartEmoji from "../../images/heartemoji.png";
import Glasses from "../../images/glasses.png";
import Humble from "../../images/humble.png";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Service</span>
        <span>
          sjdofjoasidpojasdojopfiajdojfopiawedjfoosjaoj
          <br />
          dsahfhaisuyhdifhiadshiuahjfd
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{left:"14rem"}}>
          <Cards
            emoji={HeartEmoji}
            heading={"Designer"}
            More={"Figma, Sketch, Photoshope , Adobe Photoshope"}
          />
        </div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Cards
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Cards
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
