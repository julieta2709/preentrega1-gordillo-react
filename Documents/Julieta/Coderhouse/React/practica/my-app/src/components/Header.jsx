import React from "react";

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={"images/1492184388.svg"} alt="cupcake" width={30} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="#">Productos</a>
                                <a className="nav-link" href="#">Locales</a>
                                <a className="nav-link" href="#">En Familia</a>
                                <a className="nav-link" href="#">Nosotros</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;