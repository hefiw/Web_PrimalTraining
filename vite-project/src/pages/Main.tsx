import React, { type FC } from "react";
import Btn from "../components/Btn";

const Main: FC = () => {
  return (
    <>
      <section className="base-section"></section>
      <section className="base-section"></section>
      <section className="ending-zone">
        <div className="container">
          <div className="ending-zone__wrapper">
            <span className="ending-zone__text">WHAT WE BELIEVE IN</span>
            <h1 className="ending-zone__title">Join the Primal Tribe Today!</h1>
            <Btn className='ending-zone__btn btn--white' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
