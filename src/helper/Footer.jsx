import React from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <section>
      <div className=" footer-section">
        {/* 
            LOGO Y PRIMER TEXTO */}

        <div className="footer-item p-[5%]">
          <a href="/">
            <img className="w-[15%] md:ml-10 " src={logo} alt="Logo Footer" />{" "}
          </a>
          <div className="p-2 md:ml-120%] ">
            {" "}
            <p>
              Tienda en línea que ofrece una amplia
              <br />
              variedad de dispositivos móviles de
              <br />
              última generación.
              <br /> Proyecto final
              <br />
              <span className="font-bold text-xl">
                Clase de Metodologias Agiles
              </span>
            </p>
          </div>
        </div>

        {/* 
            NOMBRE ESTUDIANTES */}

        <div className="footer-item ">
          <h2 className="font-bold">Estudiantes </h2>
          <p className="pMove">
            <a href=""> Santiago Porras</a>
          </p>
          <p className="pMove">
            <a href=""> Yeferson Idarraga </a>
          </p>
          <p className="pMove">
            <a href=""> Jesus Mendoza </a>
          </p>
          <p className="pMove">
            <a href=""> Adrian Jimenez </a>
          </p>
        </div>

        {/* 
            LINK REDES SOCIALES */}

        <div className="footer-item social">
          <h2> Siguenos </h2>
          <ul>
            <li>
              {" "}
              <i className="fa-brands fa-instagram"></i>{" "}
            </li>

            <li>
              {" "}
              <i className="fa-brands fa-youtube"></i>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/jaimezzapata/final-metodologias.git">
                <i className="fa-brands fa-github"></i>
              </a>{" "}
            </li>
          </ul>
        </div>
        {/* 
            HERRAMIENTAS USADAS, IMAGENES */}
        <div className="footer-item social ">
          <h2> Herramientas Usadas </h2>
          <ul>
            <li>
              {" "}
              <img
                src="https://i.blogs.es/bc08e5/html5_logo_256/1366_2000.png"
                className="imgMove xl:w-12 xl:h-12 w-20 h-15 object-cover rounded-full ring-2 ring-sky-700 bg-white "
              />
            </li>

            <li>
              {" "}
              <img
                src="https://blastcoding.com/wp-content/uploads/2018/10/CSS3.png"
                className="imgMove xl:w-12 xl:h-12 w-20 h-15 object-cover rounded-full ring-2 ring-sky-700 bg-white"
              />
            </li>
            <li>
              {" "}
              <img
                src="https://midu.dev/images/tags/firebase.png"
                className="imgMove xl:w-12 xl:h-12 w-20 h-15 object-cover rounded-full ring-2 ring-sky-700 bg-white "
              />
            </li>
            <li>
              {" "}
              <img
                src="https://webmention.io/avatar/pbs.twimg.com/c4bff765d9dfb3d8c6163b1de3a8e1a78cf0f9399b5a79c35695a49813821c44.jpg"
                className="imgMove xl:w-12 xl:h-12 w-20 h-15 object-cover  rounded-full ring-2 ring-sky-700 bg-white "
              />
            </li>
            <li>
              {" "}
              <img
                src="https://embed.zenn.studio/api/optimize-og-image/7706b747bf64e3a55303/https%3A%2F%2Fbradlc.gallerycdn.vsassets.io%2Fextensions%2Fbradlc%2Fvscode-tailwindcss%2F0.9.7%2F1674840236622%2FMicrosoft.VisualStudio.Services.Icons.Default "
                className="imgMove xl:w-12 xl:h-12 w-20 h-15 object-cover rounded-full ring-2 ring-sky-700 bg-white "
              />
            </li>
            <li>
              {" "}
              <img
                src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                className="imgMove xl:w-12 xl:h-12 w-20 h-15 object-cover rounded-full ring-2 ring-sky-700 bg-white "
              />
            </li>
          </ul>
        </div>

        {/* 
            ULTIMO TEXTO */}

        <div className="font-medium text-center text-xl text-cyan-400  ">
          ALIANZA EMPRESARIAL CESDE. 2O23 Todos los Derechos Reservados. Final
          Metodologias Agiles.
        </div>
        <br />
      </div>
    </section>
  );
};

export default Footer;
