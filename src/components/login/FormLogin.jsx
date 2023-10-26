import React, { useState } from "react";
import { LoginWithEmail } from './Main';
import { Link, useNavigate } from 'react-router-dom';


const FormLogin = () => {
  const input = document.querySelectorAll("#form-login input");
  const userA = document.getElementById("user-alert");
  const passA = document.getElementById("pass-alert");
  const checkUser = document.getElementById("checkUser");
  const checkPass = document.getElementById("checkPass");
  const exclamationPass = document.getElementById("exclamationPass");
  const exclamationUser = document.getElementById("exclamationUser");
  const advLog = document.getElementById("adv-log");

  const user = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (user.test(username) && pass.test(password)) {
      console.log("Intentando autenticar...");
       const response = await LoginWithEmail(username, password);
       console.log("Respuesta recibida:", response);
       if (response.success) {
          console.log("Usuario autenticado con el UID:", response.uid);
          navigate('/');
       } else {
          console.error("Error al iniciar sesión:", response.error);
          // Aquí puedes mostrar una alerta o mensaje indicando el error al usuario.
       }
    } else {
       console.log("Campos de entrada inválidos.");
       // Puedes mostrar una alerta o mensaje para indicar esto al usuario.
    }
 };
 


   const validacionLogin = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "username":
        if (user.test(e.target.value)) {
          checkUser.style.opacity = "1";
          exclamationUser.style.display = "none";
          userA.style.opacity = "0";
          advLog.style.opacity = "0";
        } else {
          checkUser.style.opacity = "0";
          exclamationUser.style.display = "block";
          exclamationUser.style.opacity = "1"
          exclamationUser.addEventListener("mouseover", () => {
            userA.style.opacity = "1";
          })
          exclamationUser.addEventListener("mouseout", () => {
            userA.style.opacity = "0";
          })
          advLog.style.opacity = "1";
        }
        break;
      case "password":
        if (pass.test(e.target.value)) {
          checkPass.style.opacity = "1";
          exclamationPass.style.display = "none";
          passA.style.opacity = "0";
          advLog.style.opacity = "0";
        } else {
          checkPass.style.opacity = "0";
          exclamationPass.style.display = "block";
          exclamationPass.style.opacity = "1";
          exclamationPass.addEventListener("mouseover", () => {
            passA.style.opacity = "1";
          })
          exclamationPass.addEventListener("mouseout", () => {
            passA.style.opacity = "0";
          })
          advLog.style.opacity = "1";
        }
        break;
    }
  };

  input.forEach((input) => {
    input.addEventListener("blur", validacionLogin);
    input.addEventListener("keyup", validacionLogin);
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <section className="contenedor-principal">
      <div className="divFondo md:h-[140%] h-[130%]"></div>

      <div className="cont-form-login">
        <form id="form-login" action="">
          <h1 className="text-blue-400 text-2xl">Inicio de sesión</h1>
          <span className="subtitulo text-gray-400">
            Ingresa con tu nombre de usuario y contraseña
          </span>
          <div className="inp-login">
            <input
              name="username"
              id="username"
              placeholder="Nombre Usuario"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i id="checkUser" className="fa-solid fa-check"></i>
            <i
              id="exclamationUser"
              className="fa-solid fa-circle-exclamation"
            ></i>
            <div id="user-alert" className="login-alert">
              <p>
                Solo se permiten letras, números, guón y guión bajo, minimo 3
                caracteres.
              </p>
            </div>
          </div>
          <div className="inp-login">
            <input
              name="password"
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="password-visible"
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible(!passwordVisible);
              }}
              title={
                passwordVisible ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              <i
                class={`fa-regular fa-eye${passwordVisible ? "" : "-slash"}`}
              ></i>
            </button>
            <i id="checkPass" className="fa-solid fa-check"></i>
            <i
              id="exclamationPass"
              className="fa-solid fa-circle-exclamation"
            ></i>
            <div id="pass-alert" className="login-alert">
              <p>
                Debe contener mínimo 8 caracteres, una letra minuscula, una
                mayuscula y puede tener caracteres especiales.
              </p>
            </div>
          </div>
          <p id="adv-log" className="text-red-600">
            Rellene los campos correctamente.
          </p>
          <div className="form-section">
            <p className="Nocuenta ">
              No tienes una cuenta?{" "}
              <Link className="TextLog uppercase" to="/registro">
                Registrate
              </Link>{" "}
            </p>
          </div>
          <button className="login-but" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormLogin;
