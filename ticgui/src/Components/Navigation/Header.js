import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import {
  logoImg,
  logoTxt,
  home,
  academy,
  play,
  donate,
  Burger,
} from "./css/icons/svg";

import { AnimatePresence, motion } from "framer-motion";
// const logoText
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClose = (e) => {
    if (!e.target.classList.contains("burgerWrap")) {
      if (showMenu) {
        setShowMenu(false);
      }
    }
  };
  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("click", onClose);

    return () => {
      body.removeEventListener("click", onClose);
    };
  });
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
        <div className="burgerIcon">
          <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="menuSideBar"
            className="menuBar"
            initial={{ x: "-30vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-40vw" }}
          >
            <motion.div
              initial={{ x: "-30vw" }}
              animate={{ x: 0, transition: { delay: 0.1 } }}
              exit={{ x: "-40vw" }}
            >
              <Menu />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
