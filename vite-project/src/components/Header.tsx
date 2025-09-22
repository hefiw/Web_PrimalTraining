import React, { type FC } from "react";
import { Link } from "react-router-dom";
import SVG from "./SVG";

const Header: FC = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <SVG id="icon-logo" width={180} heigth={25} />
      </Link>
      <div className="header__links-wrapper">
        <Link className="link" to='/'>HOME</Link>
        <Link className="link" to='/about'>ABOUT</Link>
        <Link className="btn" to='/reserve'>RESERVE YOUR SPOT</Link>
      </div>
      <button className="header__burger-btn">
        <SVG id="icon-plus" width={32} heigth={32} />
      </button>
    </header>
  );
};

export default Header;
