import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/helpers/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/listadoContraseñas',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/crearContarseña',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/editarContraseña',
    element: <Home />,
    errorElement: <Error />
  },
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
