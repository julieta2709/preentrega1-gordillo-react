import React from "react";

const Products = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <img src={"./images/Chocolate-Purple-Cupcake.svg"} className="card-img-top" alt="cupcake-chocolate" />
                        <div className="card-body">
                        <h5 className="card-title">Cupcake de Chocolate</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src={"./images/Chocolate-Rainbow-Cupcake.svg"} className="card-img-top" alt="cupcake-rainbow" />
                        <div className="card-body">
                        <h5 className="card-title">Cupcake Arcoiris</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src={"./images/Vanilla-Chocolate-Blue-Cupcake.svg"} className="card-img-top" alt="cupcake-chocolate-blue" />
                        <div className="card-body">
                        <h5 className="card-title">Cupcake de Vainilla</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src={"./images/Vanilla-Red-Cupcake.svg"} className="card-img-top" alt="cupcake-redvelvet" />
                        <div className="card-body">
                        <h5 className="card-title">Cupcake Red Velvet</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;