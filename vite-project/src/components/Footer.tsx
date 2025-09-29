import React, { type FC } from "react";
import { Link } from "react-router-dom";
import SVG from "./SVG";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top-wrapper">
            <Link className="footer__home-link" to="/">
              <SVG id="icon-logoIcon" width={229.31} heigth={136.17} />
            </Link>
            <Link className="" to="/">
              <SVG id="icon-logoText" width={333} heigth={58} />
            </Link>
          </div>
          <div className="footer__bottom-wrapper">
            <section className="footer-block">
              <h2 className="footer-block__title">contact</h2>
              <div className="footer-block__text-wrapper">
                <span className="footer-block__text">Email: </span>
                <a href="#" className="footer-block__text">hello@figma.com</a>
              </div>
              <div className="footer-block__text-wrapper">
                <span className="footer-block__text">Phone: </span>
                <a href="#" className="footer-block__text">(203) 555-5555</a>
              </div>
            </section>

            <section className="footer-block">
              <h2 className="footer-block__title">opening hours</h2>
              <div className="footer-block__text-wrapper footer-block__text-wrapper--hours">
                <span className="footer-block__text">MON – FRI</span>
                <span className="footer-block__text">5:00 – 23:00</span>
              </div>
              <div className="footer-block__text-wrapper footer-block__text-wrapper--hours">
                <span className="footer-block__text">SATURDAYS</span>
                <span className="footer-block__text">8:00 – 16:00</span>
              </div>
              <div className="footer-block__text-wrapper footer-block__text-wrapper--hours">
                <span className="footer-block__text">SUNDAYS</span>
                <span className="footer-block__text">8:00 – 13:00</span>
              </div>
              <div className="footer-block__text-wrapper footer-block__text-wrapper--hours">
                <span className="footer-block__text">HOLIDAYS</span>
                <span className="footer-block__text">8:00 – 16:00</span>
              </div>
            </section>

            <section className="footer-block">
              <h2 className="footer-block__title">social</h2>
              <a className="footer-block__text footer-block__text--link" href="#">Instagram</a>
              <a className="footer-block__text footer-block__text--link" href="#">X</a>
              <a className="footer-block__text footer-block__text--link" href="#">LinkedIn</a>
              <a className="footer-block__text footer-block__text--link" href="#">Spotify</a>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
