import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid barra">
            <div className="row">
                <div className="col-md-10">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand me-auto" href="/NavBar"><img className="cupcake" src={"images/cupcake-cereza.svg"} alt="cupcake" width={40} />Tienda de cupcakes</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/Productos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Productos
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/Chocolate">Cupcake de chocolate</a></li>
                                            <li><a className="dropdown-item" href="/Vainilla">Cupcake de vainilla</a></li>
                                            <li><a className="dropdown-item" href="/Arcoiris">Cupcake arcoiris</a></li>
                                            <li><a className="dropdown-item" href="/RedVelvet">Cupcake Red Velvet</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link" href="/locales">Locales</a></li>
                                    <li> <a className="nav-link" href="/Comprar">Comprar</a></li>
                                    <li><a className="nav-link" href="/Nosotros">Nosotros</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-2 d-flex justify-content-around align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;