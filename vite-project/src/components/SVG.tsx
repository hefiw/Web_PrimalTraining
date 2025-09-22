import React, { type FC } from "react";
import sprite from "../assets/sprite.svg";

interface SVGProps {
  id: string;
  width: number;
  heigth: number;
}

const SVG: FC<SVGProps> = ({ id, width, heigth }) => {
  return (
    <svg width={width} height={heigth}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default SVG;