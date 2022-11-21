import React from "react";

const Products = () => {

    let imagen = "images/Vanilla-Red-Cupcake.svg";
    let titulo = "Red Velvet cupcake";
    let descripcion ="Cupcake con masa sabor chocolate y frosting de crema de manteca sabor vainilla"

    return (
        <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src={imagen} alt={"cupcake-red"} width={240} />
            </div>
            <div className="col-md-6">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Products;