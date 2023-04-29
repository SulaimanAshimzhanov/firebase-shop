

import React from 'react';
import classNames from "classnames";

import cls from "./index.module.scss";

interface IDots {
    currentSlider: React.ReactNode
    dotIndex: any
};

const DotsSlider: React.FunctionComponent<IDots> = ({currentSlider, dotIndex}) => {
  return (
    <div
        className={
            currentSlider === dotIndex + 1
                ? classNames(cls.dots, cls.activeDots)
                : cls.dots
        }
    >
      
    </div>
  )
}

export default DotsSlider;
