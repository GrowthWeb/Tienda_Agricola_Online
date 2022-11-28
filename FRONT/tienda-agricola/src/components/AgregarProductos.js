import { Fragment, useState, React } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



export function CrearProductos() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <Form id="form">
                            <Form.Group className="mb-3" controlId="nameInput">
                                <Form.Label>Nombre producto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='nombreProducto'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="descripcionInput">
                                <Form.Label>Descripción </Form.Label>
                                <Form.Control
                                    type="text"
                                    name='descripcion'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="precioInput">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='precio'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="StockInput">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='stock'
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ImagenInput">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    type="file"
                                    name='image'
                                    autoFocus
                                />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button type='submit' id="submit" onClick={createProduct}>
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Form>

                        
    
                    </Modal.Body>
                </Modal>  
            </> 
            </Fragment>
        
    )
    function createProduct() {
        const form = document.getElementById('form')

        form.addEventListener('submit', function(e) {
           
            e.preventDefault();

            const formData = new FormData(this)

            fetch("http://localhost:5000/crearProducto", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': '*/*',
                    
                },
          
            })

        
        })
        //Comprobacion  de los datos
        
        alert("Datos almacenados correctamente")
    }
    
};
