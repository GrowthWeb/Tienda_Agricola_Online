import JsonData from '../data/ventas.json';
import { React } from "react";


export function ListaVentas(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.idVenta}</td>
                    <td>{info.fecha}</td>
                    <td>{info.nombreProducto}</td>
                    <td>{info.cantidad}</td>
                    <td>{info.valorUnitario}</td>
                    <td>{info.subtotal}</td>
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
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Nombre Producto</th>
                    <th>Cantidad</th>
                    <th>Valor Unitario</th>
                    <th>Subtotal</th>
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