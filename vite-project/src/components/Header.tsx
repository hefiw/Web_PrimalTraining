import React, { type FC } from "react";
import { Link } from "react-router-dom";
import SVG from "./SVG";

const Header: FC = () => {
  return (
    <header className="header header--opened">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            <SVG id="icon-logo" width={180.32} heigth={25.78} />
          </Link>
          <div className="header__links-wrapper">
            <Link className="header__link link" to="/">
              HOME
            </Link>
            <Link className="header__link link" to="/about">
              ABOUT
            </Link>
            <Link className="header__btn btn" to="/reserve">
              RESERVE YOUR SPOT
            </Link>
          </div>
          <button className="header__burger-btn">
            <SVG id="icon-plus" width={32} heigth={32} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
