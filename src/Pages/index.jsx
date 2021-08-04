import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation/index";
import Expanded from "../Components/Page/index"
import "./Setting.scss";

const Setting = () => {
  return (
    <div className="page">
      <Header />
      <div className="container">
        <div className="container-breadcrumb">
          <img src="svg/arrow-left.svg" alt="logo" />
          <p> Back to home</p>
        </div>
        <div className="container-division">
            <div className="container-division-nav">
                <Navigation />
            </div>
            <div className="container-division-page">
                <Expanded />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
