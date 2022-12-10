import React, { useState } from "react";

const ItemCount = ({ stockItems }) => {

    const [clicks, setClicks] = useState(parseInt(1));
    const [stock, setStock] = useState(stockItems);

    const agregarProducto = () => {
        setClicks(clicks + 1);
    };

    const sacarProducto = () => {
        setClicks(clicks - 1);
    };

    const onAdd = () => {
        if (clicks <= stock) {
            setStock(stock - clicks);
            setClicks(1);
        }
    }

    return (
        <div className="container">
            <div className="product-count">
                <button type="button" className="decrement" disabled={clicks <= 1} onClick={sacarProducto}>-</button>
                <input type="number" className="count-value" value={clicks} />
                <button type="button" className="increment" disabled={clicks >= stock} onClick={agregarProducto}>+</button>
                <div>
                    <button type="button" className="btn btn-danger btn-sm mx-4" disabled={stock <= 0} onClick={() => onAdd(clicks)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;