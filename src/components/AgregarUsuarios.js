import { Fragment, useState } from "react";

export function CrearUsuario(){
    const [data, setDate]=useState({

        IdUsuario: "",
        nombre: "",
        email: "",
        usuario: "",
        password: "",
        rol: ""

    }
    )

    return( 

    <Fragment>
        <center>
            <div id="containerProduct">
                <h3>Nuevo Usuario</h3>
                    <label>Nombre
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Nombre: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Correo
                        <input type="email" onChange={(e) => {
                            setDate({ ...data, Descripcion: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Usuario
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Stock: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Contraseña
                        <input type="password" onChange={(e) => {
                            setDate({ ...data, Valor: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Rol
                        <input type="user" onChange={(e) => {
                            setDate({ ...data, pass: e.target.value })
                        }
                        }>
                        </input>
                    </label>
                    <br></br>
                    <br></br>
                    
                <button onClick>Crear Usuario</button>

            </div>
        </center>


    </Fragment>

    );
}