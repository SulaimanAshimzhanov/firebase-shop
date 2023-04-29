

import classNames from 'classnames';
import React from 'react';
import { LIST } from '../../../utils/List';
import DotsSlider from '../dotsSlider/DotsSlider';
import SliderButton from '../form/sliderButton/SliderButton';

import cls from "./index.module.scss";


const Slider: React.FunctionComponent = () => {
  const [currentSlider, setCurrentSlider] = React.useState(1);


  const nextSlide = () => {
    if(currentSlider !== LIST.SliderList.length) {
      setCurrentSlider(currentSlider + 1)
    } else {
      setCurrentSlider(1)
    }
  };


  const prevSlide = () => {
    if(currentSlider > 1) {
      setCurrentSlider(currentSlider - 1)
    } else {
      setCurrentSlider(LIST.SliderList.length)
    }
  };



  // setTimeout(() => {
  //   if(currentSlider !== LIST.SliderList.length - 1) {
  //     setCurrentSlider(currentSlider + 1)
  //   } else {
  //     setCurrentSlider(0)
  //   }
  // }, 2000);
  

  return (
    <div className={cls.slider_parent}>
      <div className={cls.slider_parent_container}>
        {LIST.SliderList.map((item, index) => (
          <div 
              className={currentSlider === index + 1 ? classNames(cls.slider_item, cls.activeSlider) : cls.slider_item}
              key={item.id}
              style={{background: `url("${item.url}") center / cover`}}
          >
            <SliderButton direct="left" handleClick={prevSlide}/>
            <SliderButton direct="right" handleClick={nextSlide}/>
          </div>
        ))}
      </div>

      <div className={cls.slider_parent_dots}>
        {Array.from({length: LIST.SliderList.length}).map((item, index) => 
          <DotsSlider currentSlider={currentSlider} dotIndex={index} key={index}/>
        )}
      </div>
    </div>
  )
}

export default Slider;
