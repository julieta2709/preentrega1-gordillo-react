import React from "react";

const item = () =>{
    
    const productos = [
        {id:1, title:"cupcake de chocolate", description:"cupcake de base sabor chocolate y crema de manteca",price:"$250",pictureUrl:"./images/Chocolate-Purple-Cupcake.svg"},
        {id:2, title:"cupcake arcoiris", description:"cupcake de base sabor chocolate y crema de manteca con los colores del arcoiris",price:"$280",pictureUrl:"./images/Chocolate-Rainbow-Cupcake.svg"},
        {id:3, title:"cupcake de vainilla", description:"cupcake de base sabor vainilla y crema de chocolate",price:"$260",pictureUrl:"./images/Vanilla-Chocolate-Blue-Cupcake.svg"},
        {id:4, title:"cupcake red velvet", description:"cupcake de base sabor chocolate y crema de manteca color rojo",price:"$320",pictureUrl:"./images/Vanilla-Red-Cupcake.svg"}
    ]

    return (
        <h1>Item</h1>
    )
}

export default item;