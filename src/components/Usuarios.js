import JsonData from '../data/usuarios.json';
import { React } from "react";


export function ListaUsuarios(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.usuario}</td>
                    <td>{info.password}</td>
                    <td>{info.rol}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <center>
            <table>
                <thead>
                    <tr>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
            </center>
        </div>
    )
 }
 