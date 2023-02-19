import "./App.css";
///Importacion de componentes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./helper/Error404";
import Accesorios_index from "./components/accesorios/Accesorios_index";
import Celulares_index from "./components/celulares/Celulares_index";
import Login_index from "./components/login/Login_index";
import AgregarCel from "./components/celulares/AgregarCel";
import Header from "./helper/Header";
import EditarCel from "./components/celulares/EditarCel";
import Clientes_index from "./components/clientes/Clientes_index";
import AgregarClient from "./components/clientes/AgregarClient";
import EditarClient from "./components/clientes/EditarClient";
///Creacion de rutas

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/accesorios",
    element: <Accesorios_index />,
    errorElement: <Error404 />,
  },
  {
    path: "/celulares",
    element: <Celulares_index />,
    errorElement: <Error404 />,
  },
  // ↓ clientes↓  ↓    ↓ 
  {
    path: "/clientes",
    element: <Clientes_index />,
    errorElement: <Error404 />,
  },
  {
    path: "/edit-client",
    element: <EditarClient />,
    errorElement: <Error404 />,
  },
  {
    path: "/add-client",
    element: <AgregarClient />,
    errorElement: <Error404 />,
  },
  // ↑ clientes↑   ↑     ↑
  {
    path: "/login",
    element: <Login_index />,
    errorElement: <Error404 />,
  },
  {
    path: "/add-cel",
    element: <AgregarCel />,
    errorElement: <Error404 />,
  },

  {
    path: "/edit-cel/:id",
    element: <EditarCel />,
    errorElement: <Error404 />,
  },

  {
    path: "/header",
    element: <Header />,
    errorElement: <Error404 />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
