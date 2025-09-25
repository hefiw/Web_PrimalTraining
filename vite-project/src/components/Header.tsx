import React, { type FC, type ReactElement } from "react";
import { Link } from "react-router-dom";
import SVG from "./SVG";

const Header: FC = () => {

  function openBurger():void {
    const header = document.querySelector('.header');
    if (!header) return
    header.classList.toggle('header--opened')
  }

  return (
    <header className="header">
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
          <button className="header__burger-btn" onClick={openBurger}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="header__icon-plus-vertical" d="M16.75 2V30" stroke="black" strokeWidth="1" />
              <path d="M2 15.25H30" stroke="black" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
