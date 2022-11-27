import React from "react";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand me-auto" href="#"><img className="cupcake" src={"images/cupcake-cereza.svg"} alt="cupcake" width={40} />Tienda de cupcakes</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Productos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cupcake de chocolate</a></li>
                                        <li><a className="dropdown-item" href="#">Cupcake de vainilla</a></li>
                                        <li><a className="dropdown-item" href="#">Cupcake arcoiris</a></li>
                                        <li><a className="dropdown-item" href="#">Cupcake Red Velvet</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link" href="#">Locales</a></li>
                                <li> <a className="nav-link" href="#">Comprar</a></li>
                                <li><a className="nav-link" href="#">Nosotros</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="carrito">
                    <button type="button" className="btn btn-light">
                    <a href=""><img src={"images/cart-shopping-solid.svg"} alt="carrito" width={40} /></a>
                    <span class="badge text-bg-danger">4</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;