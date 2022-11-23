import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'



import { CrearUsuario } from './components/AgregarUsuarios';
import { CrearProductos } from './components/AgregarProductos';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <CrearUsuario/>
    <CrearProductos/>
   
    

  </React.StrictMode>
  
);
