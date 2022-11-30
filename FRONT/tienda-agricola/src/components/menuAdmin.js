import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/LogoMenu.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function MenuAdmin() {
    return (
        <Fragment>
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
                                    <Link className="nav-link" to={"/listaProductosAdmin"}>Lista productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/Carrito"}>Ventas
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Navbar>

            </>
        </Fragment>
    )
};