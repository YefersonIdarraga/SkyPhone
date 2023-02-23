import React from "react";

const Tabla = () => {
    return (
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
              <tr>
                <td data-label="Nombre:">{cliente.primer_nombre} {cliente.segundo_nombre} {cliente.primer_apellido} {cliente.segundo_apellido}</td>
                <td data-label="Descripcion:">{cliente.direccion}</td>
                <td data-label="Valor:">{cliente.telefono}</td>
               
              

                <td className="acciones">
                <button onClick={() => confirEliminar(cliente.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>

                <Link
                  to={`/edit-client/${cliente.id}`}
                  className="fa-solid fa-pen-to-square ">
                </Link>
                </td>
              </tr>
            ))}
            </tbody>
        </table>
      </section>
    );
  };
  
  export default Tabla;