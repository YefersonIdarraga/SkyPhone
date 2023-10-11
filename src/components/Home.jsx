import React from "react";
import logo from "../assets/img-producto.png";
import Header from "../helper/Header";
import FormLogin from "./login/FormLogin";

const Home = () => {
  return (
    <section className="container m-auto">
      <div className="divFondo xl:h-[150%] h-[80rem]"></div>
      <Header />

      <div className="main mt-[6%] xl:ml-[1%]  w-auto xl:w-[40%] mb-0 ">
        <p className="font-bold p-2 ">
          ✦⭑ El mejor contenido para tu smartphone.
        </p>
      </div>
      <section className="container h-[90vh] grid grid-cols-1 md:grid-cols-8 -mt-[2%] md:m-2 ">
        <section className="md:col-span-5 flex items-center justify-center ">
          <div>
            <h1 className="md:text-6xl text-5xl text-white xl:-mt-[10%] md:mt-[10%] mt-[10%] m-auto ">
              Encuentra tu mejor estilo
              <br /> para tu smartphone.
            </h1>
            <p className="text-gray-400 md:text-s text-ms m-auto p-1 xl:mt-[2%]">
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
        </section>
        <section className="md:col-span-3">
          <img className="pt-2 " src={logo} alt="" />
        </section>
        <div className="xl:-mt-[85%] -mt-[2%] xl:ml-[160%] ml-0 xl:w-[150%] md:w-[350%] md:ml-[55%] md:pt-10">
          <a
            target="_blank"
            href="https://github.com/jaimezzapata/final-metodologias"
          >
            <button className="BtnImg p-5  w-full">Contáctanos</button>
          </a>
        </div>
        {/* ///FORMULARIO  */}
      </section>
      <div className="container-formSesion ">
        <div
          className="formDetras m-auto xl:mt-[6%]
        mt-[190%] md:mt-[30%]  "
        ></div>
        <div className="formHome xl:-mt-[32%] md:-mt-[45%] -mt-[83%]">
          {" "}
          <FormLogin />{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
