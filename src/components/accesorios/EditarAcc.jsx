/* Se importan componentes */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebase/dataBase";
import { async } from "@firebase/util";

/* Creacion de funciones */

const EditarAcc = () => {
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const admin = doc(dataBase, "Admin-accesorios", id);
    const data = {
      marca: marca,
      referencia: referencia,
      precio: precio,
      caracteristicas: caracteristicas,
      imagen: imagen,
    };
    await updateDoc(admin, data);
    navigate("/accesorios");
  };

  const tenerDatosId = async (id) => {
    const dataCell = await getDoc(doc(dataBase, "Admin-accesorios", id));
    if (dataCell.exists()) {
      setMarca(dataCell.data().marca);
      setReferencia(dataCell.data().referencia);
      setPrecio(dataCell.data().precio);
      setCaracteristicas(dataCell.data().caracteristicas);
      setImagen(dataCell.data().imagen);
    } else {
    }
  };

  useEffect(() => {
    tenerDatosId(id);
  }, []);

  return (
    /*  Estructura de la tabla */
    <section className="contenedor-principal">
      <div className="divFondo md:h-[140%] h-[130%]"></div>
      <h1 className="text-3xl xl:text-5xl font-bold tracking-[3px] m-auto p-5 text-center text-stone-300 uppercase">
        Editar consulta de accesorios
      </h1>
      <section className="celulares-container md:mx-0 mx-10">
        <section className="formCell p-5 ">
          <form className="w-full max-w-2xl  m-10 " onSubmit={update} >
            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">TIPO ACCESORIO:</label>
              <input
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">CANTIDAD:</label>
              <input
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">VALOR:</label>
              <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">Caracteristicas:</label>
              <input
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
            </div>

            <div className="contenedorForm">
              <label className="text-gray-300 block uppercase font-bold mb-2">Imagen:</label>
              <input
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                type="text"
                className="form-control bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
              />
              <i id="checkC" className="fa-solid fa-check"></i>
              <i
                id="exclamationC"
                className="fa-solid fa-circle-exclamation"
              ></i>
              <div id="carac-alert" className="exclamation-alert">
                <p>Solo se permiten letras y números.</p>
              </div>
            </div>
            {/* boton actualizar */}
            <div className="cel-but">
              <button type="submit" className="btnAgregar">
                Actualizar
              </button>
              <Link className="cel-cancel" to="/accesorios">
                Cancelar
              </Link>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default EditarAcc;
