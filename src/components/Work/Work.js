import React from "react";
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import Facebook from "../../images/Facebook.png";
import "./Work.css";
const Work = () => {
  return (
    <div className="work">
      <div className="work-left">
        <div className="work-left-awesome">
          <span>Work for All these</span>
          <span>Brand & Client</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Sit laborum, magni amet
            <br /> obcaecati tempore hic rerum <br /> libero ut <br />
            assumenda accusantium!
          </span>
          <button className="button s-button">Hire Me</button>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="work-right">
          <div
            className="work-mainCirlce"
            style={{ top: "-14rem", left: "28rem" }}
          >
            <div className="work-secCirclle">
              <img src={Upwork} alt="" />
            </div>

            <div className="work-secCirclle">
              <img src={Fiverr} alt="" />
            </div>

            <div className="work-secCirclle">
              <img src={Amazon} alt="" />
            </div>

            <div className="work-secCirclle">
              <img src={Shopify} alt="" />
            </div>

            <div className="work-secCirclle">
              <img src={Facebook} alt="" />
            </div>

           </div>
           <div style={{top:"-14rem", left:""}}>
           <div style={{ top: "-20rem", left: "33rem" }} className="w-backCircle blueCircle"></div>
            <div style={{ top: "-10rem", left: "37.5rem" }} className="w-backCircle yellowCircle"></div>
           </div>          
        </div>
      </div>
    </div>
  );
};

export default Work;
