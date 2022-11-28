import { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import '../styles/tables.css'

export const ListaProductosAdmin = () => {

    const [dataProductos, setDataProductos] = useState([]);

    useEffect(() => {
        getData();
    }, [])


    function getData() {
        fetch("http://localhost:5000/productos")
            .then((resp) => resp.json())
            .then((resp) => {
                return setDataProductos(resp)
            })
            .catch((err) => console.log(err));
    }

    return (

      <Fragment>
        <div id="contenedor1" className="container mt-5" align="center">
            <h2> Lista de productos</h2>

            <Table id="tableProduct" className="table table-bordered" responsive="sm">
                <thead id='thead'className="thead-dark">
                    <tr>
                        <td>ID </td>
                        <td>NOMBRE PRODUCTO </td>
                        <td>DESCRIPCION PRODUCTO </td>
                        <td>PRECIO</td>
                        <td>STOCK</td>
                        <td>IMAGEN </td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {dataProductos.map((Producto) => (
                        <tr key={Producto.id}>
                            <td>{Producto._id}</td>
                            <td>{Producto.nombreProducto}</td>
                            <td>{Producto.descripcion}</td>
                            <td>{Producto.precio}</td>
                            <td>{Producto.stock}</td>
                            <td><img src={Producto.image.url} width={150} height={125} alt='imagen'></img></td>
                            <td> <Button>Editar</Button> </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
      </Fragment>
    )
}