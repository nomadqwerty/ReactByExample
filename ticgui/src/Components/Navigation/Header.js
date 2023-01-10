import React, { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);

  const onClickBurger = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="headerContainer">
      <div className="navBar">
        <div className="logoImg">{logoImg}</div>
        <div className="logoTxt">{logoTxt}</div>

        <div className="navItems">
          <div className="homeIcon navIcon">{home}</div>
          <div className="academyIcon navIcon">{academy}</div>
          <div className="playIcon navIcon">{play}</div>
          <div className="donateIcon navIcon">{donate}</div>
        </div>
        <div onClick={onClickBurger} className="burgerIcon">
          {burger}
        </div>
      </div>

      {showMenu ? <Menu /> : ""}
    </div>
  );
};

export default Header;
