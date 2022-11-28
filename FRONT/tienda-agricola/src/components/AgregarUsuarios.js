import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function  CrearUsuario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [data, setData] = useState({
  
    nombreUsuario: "",
    email: "",
    usuario: "",
    password: "",
    rol: ""
}
)

  return (

    <Fragment>
      <>
      <Button variant="success" onClick={handleShow}>
        Agregar Usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setData({ ...data, nombreUsuario: e.target.value })
                }}
                placeholder="Nombre usuario"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value })
                }}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="usuario">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setData({ ...data, usuario: e.target.value })
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value })
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="rol">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setData({ ...data, rol: e.target.value })
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
          <Button variant="primary" onClick={CrearUSuarios}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </Fragment>
  );
  function CrearUSuarios() {
        
    const datosJSON = JSON.stringify(data) 
  
    fetch("https://localhost:5000/crearUsuario", {
        method: "POST",
        body: datosJSON,
        headers: {
           
            "Content-Type": "application/json",
        },
  
    })
  
    //Comprobacion  de los datos
    
    alert("Datos almacenados correctamente")
  }
}
