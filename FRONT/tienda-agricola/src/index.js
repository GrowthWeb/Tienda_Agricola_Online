import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CrearProductos}  from './components/AgregarProductos';
import { CrearUsuario } from './components/AgregarUsuarios';
import { ListaUsuarios } from './components/Usuarios';
import { ListaProductos } from './components/Productos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CrearProductos/>
    <CrearUsuario/>
    <ListaUsuarios/>
    <ListaProductos/>
  </React.StrictMode>
  
);
