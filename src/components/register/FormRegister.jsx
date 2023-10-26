import React, { useState } from "react";
// import { LoginWithEmail } from "./Main";
// import { Link, useNavigate } from "react-router-dom";

const FormRegister = () => {
  const input = document.querySelectorAll("#form-login input");
  const userA = document.getElementById("user-alert");
  const emailA = document.getElementById("email-alert");
  const confirmEmailA = document.getElementById("confirmEmail-alert");
  const passA = document.getElementById("pass-alert");
  const confirmPassA = document.getElementById("confirmPass-alert");
  const checkUser = document.getElementById("checkUser");
  const checkEmail = document.getElementById("checkEmail");
  const checkConfirmEmail = document.getElementById("checkConfirmEmail");
  const checkPass = document.getElementById("checkPass");
  const checkConfirmPass = document.getElementById("checkConfirmPass");
  const exclamationPass = document.getElementById("exclamationPass");
  const exclamationConfirmPass = document.getElementById(
    "exclamationConfirmPass"
  );
  const exclamationUser = document.getElementById("exclamationUser");
  const exclamationEmail = document.getElementById("exclamationEmail");
  const exclamationConfirmEmail = document.getElementById(
    "exclamationConfirmEmail"
  );
  const advLog = document.getElementById("adv-log");

  const user = /^[a-zA-Z0-9-_]{3,32}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  // const navigate = useNavigate();

  // const handleLogin = async () => {
  //   if (user.test(username) && pass.test(password)) {
  //     console.log("Intentando autenticar...");
  //     const response = await LoginWithEmail(username, password);
  //     console.log("Respuesta recibida:", response);
  //     if (response.success) {
  //       console.log("Usuario autenticado con el UID:", response.uid);
  //       navigate("/");
  //     } else {
  //       console.error("Error al iniciar sesión:", response.error);
  //       // Aquí puedes mostrar una alerta o mensaje indicando el error al usuario.
  //     }
  //   } else {
  //     console.log("Campos de entrada inválidos.");
  //     // Puedes mostrar una alerta o mensaje para indicar esto al usuario.
  //   }
  // };

  const validacionRegistro = (e) => {
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
          exclamationUser.style.opacity = "1";
          exclamationUser.addEventListener("mouseover", () => {
            userA.style.opacity = "1";
          })
          exclamationUser.addEventListener("mouseout", () => {
            userA.style.opacity = "0";
          })
          advLog.style.opacity = "1";
        }
        break;
      case "email":
        if (emailRegex.test(e.target.value)) {
          checkEmail.style.opacity = "1";
          exclamationEmail.style.display = "none";
          emailA.style.opacity = "0";
          advLog.style.opacity = "0";
        } else {
          checkEmail.style.opacity = "0";
          exclamationEmail.style.display = "block";
          exclamationEmail.style.opacity = "1";
          exclamationEmail.addEventListener("mouseover", () => {
            emailA.style.opacity = "1";
          })
          exclamationEmail.addEventListener("mouseout", () => {
            emailA.style.opacity = "0";
          })
          advLog.style.opacity = "1";
        }
        break;
      case "confirmEmail":
        if (email === confirmEmail) {
          checkConfirmEmail.style.opacity = "1";
          exclamationConfirmEmail.style.display = "none";
          confirmEmailA.style.opacity = "0";
          advLog.style.opacity = "0";
        } else {
          checkConfirmEmail.style.opacity = "0";
          exclamationConfirmEmail.style.display = "block";
          exclamationConfirmEmail.style.opacity = "1";
          exclamationConfirmEmail.addEventListener("mouseover", () => {
            confirmEmailA.style.opacity = "1";
          })
          exclamationConfirmEmail.addEventListener("mouseout", () => {
            confirmEmailA.style.opacity = "0";
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
      case "confirmPassword":
        if (password === confirmPassword) {
          checkConfirmPass.style.opacity = "1";
          exclamationConfirmPass.style.display = "none";
          confirmPassA.style.opacity = "0";
          advLog.style.opacity = "0";
        } else {
          checkConfirmPass.style.opacity = "0";
          exclamationConfirmPass.style.display = "block";
          exclamationConfirmPass.style.opacity = "1";
          exclamationConfirmPass.addEventListener("mouseover", () => {
            confirmPassA.style.opacity = "1";
          })
          exclamationConfirmPass.addEventListener("mouseout", () => {
            confirmPassA.style.opacity = "0";
          })
          advLog.style.opacity = "1";
        }
        break;
    }
  };

  input.forEach((input) => {
    input.addEventListener("blur", validacionRegistro);
    input.addEventListener("keyup", validacionRegistro);
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <section className="contenedor-principal">
      <div className="divFondo md:h-[140%] h-[130%]"></div>

      <div className="cont-form-login">
        <form id="form-login" action="">
          <h1 className="text-blue-400 text-2xl">Registro</h1>
          <span className="subtitulo text-gray-400">
            Ingresa los datos requeridos para realizar el registro
            correctamente.
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
              name="email"
              id="email"
              placeholder="Correo"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i id="checkEmail" className="fa-solid fa-check"></i>
            <i
              id="exclamationEmail"
              className="fa-solid fa-circle-exclamation"
            ></i>
            <div id="email-alert" className="login-alert">
              <p>
                Solo se permiten letras, números, guón y guión bajo, minimo 3
                caracteres.
              </p>
            </div>
          </div>
          <div className="inp-login">
            <input
              name="confirmEmail"
              id="confirmEmail"
              placeholder="Confirmar correo"
              type="text"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <i id="checkConfirmEmail" className="fa-solid fa-check"></i>
            <i
              id="exclamationConfirmEmail"
              className="fa-solid fa-circle-exclamation"
            ></i>
            <div id="confirmEmail-alert" className="login-alert">
              <p>Los correos no coinciden.</p>
            </div>
          </div>
          <div className="inp-login">
            <input
              name="password"
              id="password"
              type={passwordVisible ? "text" : "password"}
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
          <div className="inp-login">
            <input
              name="confirmPassword"
              id="confirmPassword"
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i id="checkConfirmPass" className="fa-solid fa-check"></i>
            <i
              id="exclamationConfirmPass"
              className="fa-solid fa-circle-exclamation"
            ></i>
            <div id="confirmPass-alert" className="login-alert">
              <p>Las contraseñas no coinciden.</p>
            </div>
          </div>
          <p id="adv-log" className="text-red-600">
            Rellene los campos correctamente.
          </p>
          <button className="login-but">Registrarme</button>
        </form>
      </div>
    </section>
  );
};

export default FormRegister;
