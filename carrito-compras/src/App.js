import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import Layout from "./componentes/Layout";
import Contacto from "./componentes/Contacto";
import QuienesSomos from "./componentes/QuienesSomos";
import Productos from "./componentes/Productos";
import { CarritoContext } from "./context";
import Carrito from "./componentes/Carrito";
import Pago from "./componentes/pago";
import './css/bootstrap.min.css';
import './css/styles.css';

const App = () => {
  const [carrito,setCarrito] = React.useState([])
  return (
    <>
      <CarritoContext.Provider value={[carrito, setCarrito]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              <Route path="/productos" element={<Productos />}></Route>
              <Route path="/quienessomos" element={<QuienesSomos />}></Route>
              <Route path="/carrito" element={<Carrito />}></Route>
              <Route path="/pago" element={<Pago />}></Route>
              <Route path="*" element={<p className="colorB">404</p>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CarritoContext.Provider>
    </>
  );
};

export default App;