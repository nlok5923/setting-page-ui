import React from "react";
import "./Navigation.scss";

const element = [
  "Profile",
  "Notifications",
  "Calls",
  "Meetings",
  "Audio/Video Settings",
];

const Navigation = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-head">Settings</div>
        <div className="navbar-elements">
          {element.map((element, index) => {
            return (
              <div className="element">
                <h1 key={index}>{element}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
