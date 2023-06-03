import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const Crear = () => {
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipo, setTipo] = useState("");
  const [img, setImg] = useState(null);
  return (
    <form>
        <section>
            <label htmlFor="">Nombre sitio web</label>
            <input type="text" />
        </section>
        <section>
            <label htmlFor="">Url sitio web</label>
            <input type="text" />
        </section>
        <section>
            <label htmlFor="">Contraseña</label>
            <input type="text" />
        </section>
        <section>
            <label htmlFor="">Tipo sitio web</label>
            <input type="text" />
        </section>
        <section>
            <label htmlFor="">Imagen sitio Web</label>
            <input type="text" />
        </section>
    </form>
  );
};

export default Crear;
