import { Routes, Route } from "react-router-dom";
import { LoginUsuarios } from "./components/Login.js";
import { HomePage } from "./components/Home.js";
import { CrearProductos } from "./components/AgregarProductos.js";
//import { ListaProductosAdmin } from "./Components/Productos.js";
import { ListaVentas } from "./components/Ventas.js";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Login" element={<LoginUsuarios/>} />
      <Route path="/nuevoProducto" element={<CrearProductos />} />
      <Route path="/listaVentas" element={<ListaVentas />} />         
    </Routes>
  );
}