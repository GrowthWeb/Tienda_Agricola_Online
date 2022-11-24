import {React, Fragment } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export function MenuAdmin() {
  return (
    <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <Link className="nav-link" to={""}>Inicio</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to={""}>Lista productos</Link>
                      </li>

                      <li className="nav-item">
                          <Link className="nav-link" to={""}>Crear Nuevos productos
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to={""}>Ventas
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
      </Fragment>
  )
};