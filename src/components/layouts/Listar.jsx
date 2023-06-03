import { collection, getDocs, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../config/configFirebase";
const Listar = () => {
  const [contrasenas, setContrasenas] = useState([]);

  const lstarContraseñas = async () => {
    const contrasenasCollection = collection(dataBase, "contrasenas");
    const data = await getDocs(contrasenasCollection);
    setContrasenas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    lstarContraseñas();
    console.log(contrasenas);
  }, []);
  return (
    <section className="container p-5 d-flex gap-5 flex-wrap">
      {contrasenas.map((contrasena) => (
        <div key={contrasena.id} className="card">
          <img src={contrasena.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{contrasena.nombre}</h5>
            <p className="card-text">
              {contrasena.tipo}
            </p>
            <p>
              {contrasena.contrasena}
            </p>
            <p>
              {contrasena.usuario}
            </p>
            <a href={contrasena.url} target="_blanck" className="btn btn-primary">
              Acceder: {contrasena.nombre}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Listar;
