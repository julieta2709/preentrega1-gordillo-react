import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card">
                <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;