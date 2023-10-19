import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import Burgers from "../components/hamburger/Burgers";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container__header ">
      <div className="div__logo">
        <Link to="/">
          <img className="div__log__img" src={logo} alt="" />
        </Link>
      </div>
      <section>
        <div className="div__navigation">
          <ul>
            <span className={`linkClass ${clicked ? "active" : ""}`}>
              <NavLink to="/">
                <li>Inicio</li>
              </NavLink>
              <NavLink to="/clientes">
                <li>Clientes</li>
              </NavLink>
              <NavLink to="/accesorios">
                <li>Accesorios</li>
              </NavLink>
              <NavLink to="/celulares">
                <li>Celulares</li>
              </NavLink>
              <NavLink className="navigation__sesion active" to="/login">
                <li>Inicio sesión</li>
              </NavLink>
            </span>
            <div className="burgerClass ">
              <Burgers clicked={clicked} handleClick={handleClick} />
              <div
                className={`Bgdiv initial ${clicked ? "active" : ""} `}
              ></div>
            </div>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Header;
