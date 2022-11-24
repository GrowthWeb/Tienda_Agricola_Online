import { Fragment, React} from "react";
//import { useState } from "react";

//import { Link } from "react-router-dom";

import '../styles/login.css'
import logo from '../resources/LogoApp.png'


export function LoginUsuarios() {

    return (

        <Fragment>

            <center>
                <div id="contenedor">
                    <div id="central">
                        <div id="login">
                            <div id="logo">
                             <img src={logo} alt="imagenLogo" width="45%" height="30%"/>
                            </div>
                            <div class="titulo">
                                Bienvenido
                            </div>
                            <form id="loginform">
                                <input type="text" name="usuario" placeholder="Usuario" required/>

                                    <input type="password" placeholder="Contraseña" name="password" required/>

                                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                                    </form>
                                    <div class="pie-form">
                                        <a href="#">¿Perdiste tu contraseña?</a>
                                        <a href="#">¿No tienes Cuenta? Registrate</a>
                                    </div>
                                </div>
                                <div class="inferior">
                                    <a href="#">Volver</a>
                                </div>
                        </div>
                    </div>
               
            </center>
        </Fragment>


    );

    /*function Validacion(usuarioNombre, contrasena) {
  
      var rol = "";
      var datos = JsonData; //Integra o con express o con mongoDb   
  
  
      for (const usuario of datos) {
        if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
          rol=usuario.Rol
        }
      }
      return rol;
    }
  
  
  
    function VerInfo() {
  
  
  console.log(Validacion(data.user, data.pass));
      // eslint-disable-next-line eqeqeq
      if (Validacion(data.user, data.pass)==="Admin") {
        setURL("/ListaProductos")
  
      } else if (Validacion(data.user, data.pass)==="Cliente") {
        setURL("/HomeCliente")
      }else{
        alert("Los datos son incorrectos")
      }
    }*/
};