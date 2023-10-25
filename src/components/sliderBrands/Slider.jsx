import React from "react";
import imgIphone from "../sliderBrands/img/iPhone.webp";
import imgMotorola from "../sliderBrands/img/motorola.webp";
import imgNokia from "../sliderBrands/img/Nokia.webp";
import imgOppo from "../sliderBrands/img/oppo.webp";
import imgSamsung from "../sliderBrands/img/samsung.webp";
import imgXiaomi from "../sliderBrands/img/Xiaomi.webp";
import "../sliderBrands/slider.css";
export const Slider = () => {
  return (
    <>
      <div className="slider">
        <h2 className="slider__title">Nuestras Marcas</h2>
        <hr />
        <div className="slide__track">
          <div className="slide">
            <img src={imgIphone} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgMotorola} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgNokia} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgOppo} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgSamsung} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgXiaomi} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgIphone} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgMotorola} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgNokia} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgOppo} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgSamsung} className="img__brands" />
          </div>
          <div className="slide">
            <img src={imgXiaomi} className="img__brands" />
          </div>
        </div>
      </div>
    </>
  );
};
