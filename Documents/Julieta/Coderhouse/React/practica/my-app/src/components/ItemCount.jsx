import React, { useState, useEffect } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [clicks, setClicks] = useState(parseInt(initial));

    const agregarProducto = () => {
        setClicks(clicks + 1);
    };

    const sacarProducto = () => {
        setClicks(clicks - 1);
    };

    useEffect(()=>{
        setClicks(parseInt(initial));
    },[initial]);

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