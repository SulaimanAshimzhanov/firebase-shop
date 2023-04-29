

import React from 'react';
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import classNames from "classnames";

import cls from "./index.module.scss";

interface ISlider {
    direct: React.ReactNode
    handleClick: React.MouseEventHandler<HTMLButtonElement>
};


const SliderButton: React.FunctionComponent<ISlider> = ({direct, handleClick}) => {
    

  return (
    <button 
        onClick={handleClick}
        className={
            direct === "left"
                ? classNames(cls.sliderButton, cls.left)
                : classNames(cls.sliderButton, cls.right)
            }
    >
      {
        direct === "left"
            ? <HiArrowCircleLeft/>
            : <HiArrowCircleRight/>
      }
    </button>
  )
}

export default SliderButton;
