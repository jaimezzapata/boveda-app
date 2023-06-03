import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/listadoContraseñas"}>Listar Contraseñas</Link>
        <Link to={"/crearContarseña"}>Crear Contraseña</Link>
      </nav>
    </header>
  );
};

export default Header;
