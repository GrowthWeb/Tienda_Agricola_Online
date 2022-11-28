import { React } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../resources/LogoMenu.png';
import firstLabel from '../resources/Img01.png';
import secondLabel from '../resources/Img02.png';
import thirLabel from '../resources/Img03.png';
import '../resources/Img01.png';

import '../styles/menuCliente.css';

export function MenuCliente() {


  return (
    <>
      <Navbar className="barraMenu">
        <Container>
          <Navbar.Brand href="#home" className="navTitle">
            <img
              alt="ImagenLogo"
              src={logo}
              width="60"
              height="50"
              className="img"
            />{' '}
            Agro-App
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbutons">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={"/"}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/ListaProductos"}>Lista productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Carrito"}>Carrito
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
      <br>
      </br>
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={firstLabel} width='600px' height='500px'
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={secondLabel} width='600px' height='500px'
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={thirLabel} width='600px' height='500px'
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Container>

    </>

  );

}; 