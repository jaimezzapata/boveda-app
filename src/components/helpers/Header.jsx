import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/listadoContrasenas"}>Listar Contraseñas</Link>
        <Link to={"/crearContrasena"}>Crear Contraseña</Link>
      </nav>
    </header>
  );
};

export default Header;
