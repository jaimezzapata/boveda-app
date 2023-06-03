import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Header from "../helpers/Header";
import { dataBase } from "../../config/configFirebase";
import {useNavigate} from 'react-router-dom'

const Crear = () => {
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipo, setTipo] = useState("");
  const [img, setImg] = useState(null);
  const returnListado = useNavigate()

  const agregarContrasena = async (e) => {
    e.preventDefault()
    const contrasenaCollection = collection(dataBase, "contrasenas");
    const objContrasena = {
      nombre,
      url,
      contrasena,
      tipo,
      img,
    };
    await addDoc(contrasenaCollection, objContrasena);
    returnListado('/listadoContraseñas')
  };

  return (
    <section>
      <Header />
      <form onSubmit={agregarContrasena}>
        <section>
          <label htmlFor="nombre">Nombre sitio web</label>
          <input
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
            type="text"
          />
        </section>
        <section>
          <label htmlFor="url">Url sitio web</label>
          <input
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            type="text"
          />
        </section>
        <section>
          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            onChange={(e) => setContrasena(e.target.value)}
            type="password"
          />
        </section>
        <section>
          <label htmlFor="tipo">Tipo sitio web</label>
          <input
            id="tipo"
            onChange={(e) => setTipo(e.target.value)}
            type="text"
          />
        </section>
        <section>
          <label htmlFor="img">Imagen sitio Web</label>
          <input
            id="img"
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
          />
        </section>
        <input type="submit" value='Agregar Elemento' />
      </form>
    </section>
  );
};

export default Crear;
