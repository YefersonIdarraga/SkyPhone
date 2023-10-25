import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./clientess.css";
import icon_cliente from "../../assets/icon_cliente.png";
/* import icon_cliente from "../../assets/icon_cliente.png"; */

const MySwal = withReactContent(Swal);

// ontener informacion de la base de datos y la tabla
const Clientes_index = () => {
  const [clientes, setClientes] = useState([]);
  const clientCard = collection(dataBase, "Admin-clientes");

  const listarClientes = async () => {
    const datos = await getDocs(clientCard);
    console.log(datos);
    setClientes(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(clientes);
  };

  /// Funcion para eliminar datos
  const eliminarCliente = async (id) => {
    const clientDelete = doc(dataBase, "Admin-clientes", id);
    await deleteDoc(clientDelete);
    listarClientes();
  };

  /*  funcion  del modal de eliminar */
  const confirEliminar = (id) => {
    Swal.fire({
      title: "Esta seguro que quieres Eliminar?",
      text: "Si eliminas esto, no tendrá reversa!",
      icon: "Peligro!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar, this shit!",
    }).then((result) => {
      if (result.isConfirmed) {
        /*  LLamado a la accion  */
        eliminarCliente(id);
        Swal.fire("Eliminado!", "Tu elección a sido eliminada", "Exito!😎");
      }
    });
  };

  useEffect(() => {
    listarClientes();
  }, []);

  return (
    <section>
      <div className="divFondo md:h-[140%] h-[130%]"></div>
      <section className="celulares-container md:mx-0 mx-10">
        {/* Datos de la tabla */}
        <section className="listado-celulares">
          {clientes.map((cliente) => (
            <div key={cliente.id} className="cel-card">
              <div className="cel-subcont">
                {/* OTRA FORMA DE MOSTRAR LAS CARDS */}
                <div className="wrapper targeta_client">
                  {" "}
                  {/*inicio targeta */}
                  <div className="overviewInfo">
                    <div className="productinfo">
                      <img src={icon_cliente} alt="" />

                      <div className="targeta_cont">
                        <div className="targeta_cont_items">
                          <div className="grouptext">
                            <h3>Cliente</h3>
                            <p>
                              {cliente.primer_nombre} {cliente.segundo_nombre}
                            </p>
                            <p>
                              {cliente.primer_apellido}{" "}
                              {cliente.segundo_apellido}
                            </p>
                          </div>
                          <div className="grouptext">
                            <h3>Direccion</h3>
                            <p>{cliente.direccion}</p>
                          </div>
                          <div className="grouptext">
                            <h3>Telefono</h3>
                            <p>{cliente.telefono}</p>
                          </div>
                        </div>
                      </div>

                      <div className="acciones_clie">
                        <div className="checkoutButton ojo">
                          {" "}
                          {/* ↓ acciones ↓ */}
                          <div className="priceTag">
                            <span>
                              <button
                                onClick={() => confirEliminar(cliente.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </span>
                          </div>
                          <h2>Eliminar</h2>
                        </div>{" "}
                        {/* ↑ acciones ↑ */}
                        <div className="checkoutButton ojo">
                          {" "}
                          {/* ↓ acciones ↓ */}
                          <div>
                            <Link
                              to={`/edit-client/${cliente.id}`}
                              className="fa-solid fa-pen-to-square "
                            ></Link>
                          </div>
                          <h2>Editar</h2>
                        </div>{" "}
                        {/* ↑ acciones ↑ */}
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* fin targeta */}
              </div>
            </div>
          ))}
        </section>
      </section>
      <Link to="/add-client" className="add-cel ml-40 bg-red-600">
        <i className="fa-solid fa-plus"></i>
        <h1>Agregar nuevo cliente</h1>
      </Link>

      {/* tabla ↓         ↓          ↓ */}
      <section className="tabla">
        <table className="prueba">
          <thead>
            <tr className="text-xl ">
              <th>Cliente</th>
              <th>Dirreccion</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td data-label="Nombre:">
                  {cliente.primer_nombre} {cliente.segundo_nombre}{" "}
                  {cliente.primer_apellido} {cliente.segundo_apellido}
                </td>
                <td data-label="Descripcion:">{cliente.direccion}</td>
                <td data-label="Valor:">{cliente.telefono}</td>

                <td className="acciones">
                  <button onClick={() => confirEliminar(cliente.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>

                  <Link
                    to={`/edit-client/${cliente.id}`}
                    className="fa-solid fa-pen-to-square "
                  ></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* tabla  ↑     ↑      ↑     ↑      ↑ */}
    </section>
  );
};

export default Clientes_index;
