import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../Contexts/Main';
import PrivateRoute from '../PrivateRoute/Main';
import Header from '../helper/Header'
import Home from "../components/Home";
import Error404 from "../helper/Error404";
import Accesorios_index from "../components/accesorios/Accesorios_index";
import Celulares_index from "../components/celulares/Celulares_index";
import Clientes_index from "../components/clientes/Clientes_index";
import Login_index from "../components/login/Login_index";
import AgregarCel from "../components/celulares/AgregarCel";
import AgregarAcc from "../components/accesorios/AgregarAcc";
import EditarCel from "../components/celulares/EditarCel";
import EditarClient from "../components/clientes/EditarClient";
import EditarAcc from "../components/accesorios/EditarAcc";
import AgregarClient from "../components/clientes/AgregarClient";
import Footer from "../helper/Footer";

import CommitList from "../components/GitHub/CommitList"

const Routing = () => {
    return (
        <>
            <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login_index />} />

                    {/* Rutas para celulares */}
                    <Route path="/celulares" element={<Celulares_index />} />
                    <Route path="/celulares/agregar" element={<PrivateRoute><AgregarCel /></PrivateRoute>} />
                    <Route path="/celulares/editar/:id" element={<PrivateRoute><EditarCel /></PrivateRoute>} />

                    {/* Rutas para accesorios */}
                    <Route path="/accesorios" element={<Accesorios_index />} />
                    <Route path="/accesorios/agregar" element={<PrivateRoute><AgregarAcc /></PrivateRoute>} />
                    <Route path="/accesorios/editar/:id" element={<PrivateRoute><EditarAcc /></PrivateRoute>} />

                    {/* Rutas para clientes */}
                    <Route path="/clientes" element={<Clientes_index />} />
                    <Route path="/clientes/agregar" element={<PrivateRoute><AgregarClient /></PrivateRoute>} />
                    <Route path="/clientes/editar/:id" element={<PrivateRoute><EditarClient /></PrivateRoute>} />

                    <Route path="/CommitList" element={<CommitList />} />

                    {/* Ruta para errores 404 (Debe ser siempre la última) */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    )
}


export default Routing;
