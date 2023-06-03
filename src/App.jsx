import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/helpers/Home";
import Listar from "./components/layouts/Listar";
import Crear from "./components/layouts/Crear";
import Editar from "./components/layouts/Editar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/listadoContraseñas",
    element: <Listar />,
    errorElement: <Error />,
  },
  {
    path: "/crearContarseña",
    element: <Crear />,
    errorElement: <Error />,
  },
  {
    path: "/editarContraseña",
    element: <Editar />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
