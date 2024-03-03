import React from "react";
import Medi from "../assets/picto-meditation.png";
import Body from "../assets/picto-bodybuilding.png";
import Cycl from "../assets/picto-cycling.png";
import Swim from "../assets/picto-swimming.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="side-list-item">
          <a href="#">
            <img src={Medi} alt="medi-icon" className="sidebar-icon" />
          </a>
        </li>
        <li className="side-list-item">
          <img src={Swim} alt="medi-icon" className="sidebar-icon" />
        </li>
        <li className="side-list-item">
          <img src={Cycl} alt="medi-icon" className="sidebar-icon" />
        </li>
        <li className="side-list-item">
          <img src={Body} alt="medi-icon" className="sidebar-icon" />
        </li>
      </ul>
      <h4 className="sidebar-txt">Copyright, SportSee 2020</h4>
    </div>
  );
};

export default Sidebar;
