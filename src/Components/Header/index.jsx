import React from "react";
import HighLight from "../HighLight/index";
import "./Header.scss";

const Header = () => {
  return (
    <div className="bar">
      <div className="header">
        <img className="header-logo" src="svg/logo.svg" alt="logo" />
        <div className="header-content">
          <div className="header-content-subscription">
            <p>
              You are on <HighLight> Trial plan </HighLight> plan which will
              expire in next 6 days
            </p>
          </div>
          <div className="header-content-action">
            <span>
              <img src="svg/bell.svg" alt="logo"></img>
              <img className="notif-icon" src="svg/notif.svg" alt="logo" />
            </span>
            <img src="svg/gear.svg" alt="logo" />
            <div className="header-content-action-profile">
              <span>
                <img className="lady" src="images/lady.png" alt="logo" />
                <img className="status-icon" src="svg/status.svg" alt="logo" />
              </span>
              <img src="svg/dropdown.svg" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
