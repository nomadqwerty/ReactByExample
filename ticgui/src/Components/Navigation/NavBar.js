import React from "react";
import "./css/nav.css";
import Header from "./Header";

const Navbar = (props) => {
  return (
    <div className="stickyHeader">
      <Header setShowMenu={props.setShowMenu} showMenu={props.showMenu} />
    </div>
  );
};

export default Navbar;
