import { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function CrearProductos(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [dataProduct, setData] = useState({
  
    nombreProducto: "",
    descripcion: "",
    precio: "",
    stock: "",
    image: ""
}
)

  return (

        <Fragment>
            <>
                <Button variant="success" onClick={handleShow}>
                    Añadir producto
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="nameInput">
                                <Form.Label>Nombre producto</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...dataProduct, nombreProducto: e.target.value })
                                    }}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="descripcionInput">
                                <Form.Label>Descripción </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...dataProduct, descripcion: e.target.append })
                                    }}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="precioInput">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...dataProduct, precio: e.target.append })
                                    }}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="StockInput">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...dataProduct, stock: e.target.value })
                                    }}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ImagenInput">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => {
                                        setData({ ...dataProduct, image: e.target.value })
                                    }}
                                    autoFocus
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={CrearProducto}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Fragment>

  );
  function CrearProducto() {

    const datosForm = FormData(dataProduct)


    fetch("http://localhost:5000/crearProducto", {
        method: "POST",
        body: datosForm,
        headers: {

            "Content-Type": "application/json",
        },

    })

    //Comprobacion  de los datos

    alert("Producto guardado")
}    
};