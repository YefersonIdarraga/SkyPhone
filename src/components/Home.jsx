import React from "react";
import Header from "../helper/Header";
import imgPhone from "../assets/imgPhone.webp";
import FormLogin from "./login/FormLogin";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="div__background"></div>

      <div className="div__container__home">
        <div className="div__content ">
          <p className="class__p__home">
            ✦⭑ El mejor contenido para tu smartphone.
          </p>
          <div className="div__content__title ">
            <h1 className="content__title">
              Encuentra tu mejor estilo
              <br /> para tu smartphone.
            </h1>
            <p className="content__p ">
              Somos una tienda en línea que ofrece una amplia variedad de
              dispositivos móviles de última generación, así como una gran
              selección de accesorios para personalizar y proteger tu
              dispositivo. <br />
              En nuestra tienda, ofrecemos una amplia selección de dispositivos
              móviles de última generación, desde teléfonos inteligentes hasta
              tabletas y wearables. Además, contamos con una gran variedad de
              accesorios, como fundas, protectores de pantalla, cargadores,
              auriculares y mucho más.
            </p>
          </div>
          <div className="div__contact">
            <a target="_blank" href="#">
              <button className="contact__contac">Contáctanos</button>
            </a>
          </div>
        </div>
        {/* ///IMG HOME  */}
        <div className="div__img__home">
          <img src={imgPhone} className="img" />
        </div>
      </div>

      {/* <div className="container-formSesion ">
        <div
          className="formDetras m-auto xl:mt-[6%]
        mt-[190%] md:mt-[30%]  "
        ></div>
        <div className="formHome xl:-mt-[32%] md:-mt-[45%] -mt-[83%]">
          {" "}
          <FormLogin />{" "}
        </div>
      </div> */}
    </section>
  );
};

export default Home;
