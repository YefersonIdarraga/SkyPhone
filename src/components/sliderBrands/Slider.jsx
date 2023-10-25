import React from "react";
import imgIphone from "../../assets/sliderImg/iPhone.webp";
import imgMotorola from "../../assets/sliderImg/motorola.webp";
import imgNokia from "../../assets/sliderImg/Nokia.webp";
import imgOppo from "../../assets/sliderImg/oppo.webp";
import imgSamsung from "../../assets/sliderImg/samsung.webp";
import imgXiaomi from "../../assets/sliderImg/Xiaomi.webp";
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
