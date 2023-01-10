import React from "react";
import Menu from "./Menu";
import {
  logoImg,
  logoTxt,
  home,
  academy,
  play,
  donate,
  burger,
} from "./css/icons/svg";
// const logoText
const Header = () => {
  return (
    <div>
      <div className="navBar">
        <div className="logoImg">{logoImg}</div>
        <div className="logoTxt">{logoTxt}</div>

        <div className="navItems">
          <div className="homeIcon navIcon">{home}</div>
          <div className="academyIcon navIcon">{academy}</div>
          <div className="playIcon navIcon">{play}</div>
          <div className="donateIcon navIcon">{donate}</div>
        </div>
        <div className="burgerIcon">{burger}</div>
      </div>
      {/* <Menu /> */}
    </div>
  );
};

export default Header;
