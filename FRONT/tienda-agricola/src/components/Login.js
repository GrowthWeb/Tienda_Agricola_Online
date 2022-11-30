import {useEffect, useState , Fragment, React} from "react";
import { Link } from "react-router-dom";
import '../styles/login.css'
import logo from '../resources/LogoApp.png'


export function LoginUsuarios() {

  const [data, setDate] = useState({
    user: "",
    pass: "",
    rol: "",

  });
  const [url, setURL] = useState("");
  const [dataUsuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
      getData();

  }, [])


  function getData() {
      fetch("http://localhost:5000/usuarios")
          .then((resp) => resp.json())
          .then((resp) => {
              return setDataUsuarios(resp)
          })
          .catch((err) => console.log(err));
  }

  return (

    <Fragment>

      <center>
        <div id="contenedor">
          <div id="central">
            <div id="login">
              <div id="logo">
                <img src={logo} alt="imagenLogo" width="45%" height="30%" />
              </div>
              <div className="titulo">
                Bienvenido
              </div>
              <form id="loginform">
                <input type="text"  name="usuario" placeholder="Usuario" onChange={(e) => {
              setDate({ ...data, user: e.target.value })
            }}/>
                <input type="password" name="clave" placeholder="Contraseña" onChange={(e) => {
              setDate({ ...data, pass: e.target.value })
            }}/>
                <Link to={url}>
                <button type="submit" id="submit" onClick={VerInfo}>Login</button>
                </Link>
              </form>
              <div className="pie-form">

                <a href="/">¿No tienes Cuenta? Registrate</a>
              </div>
            </div>
            <div className="inferior">
              <a href="/">Volver</a>
            </div>
          </div>
        </div>

      </center>
    </Fragment>


  );

  //LOGIN//

  function Validacion(userName, clave) {

    const form = document.getElementById('loginform')

    form.addEventListener('submit', function (e) {

      e.preventDefault();


    })
    var dataU = dataUsuarios
   

    var Rol = ""

    for ( const datos of dataU) {

      if (userName === datos.usuario && clave === datos.password) {
        Rol = datos.rol

      }
    
    }
   

    return Rol;

  };
   //Verificacion de rol y acceso a ruta//

  function VerInfo() {

    console.log(Validacion(data.user, data.pass));

    if (Validacion(data.user, data.pass) === "admin") {
      setURL("/homeAdmin")

    } else if (Validacion(data.user, data.pass) === "cliente") {
      setURL("/home")
    } else {
      alert("Los datos son incorrectos")
    }
  }

};