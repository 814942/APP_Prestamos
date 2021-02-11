import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState } from "react";
import Mensaje from "./components/Mensaje";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

function App() {
  //state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let components;
  if (cargando) {
    components = <Spinner />;
  } else if (total === 0) {
    components = <Mensaje />;
  } else {
    components = <Result total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <div>
      <Header titulo={"Cotizador de prestamo"} />
      <div className="container">
        <Form
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">{components}</div>
      </div>
    </div>
  );
}

export default App;
