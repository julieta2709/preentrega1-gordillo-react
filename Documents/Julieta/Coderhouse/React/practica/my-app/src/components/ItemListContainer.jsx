import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} items al carrito`);
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-warning" role="alert">
                        <p>{greeting}</p>
                        <div>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;