import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
    return (
        <article className="productDetail">
            <img className="prodimg" src={product.img} alt={product.alt}></img>
            <div className="prodinfo">
                <h4>{product.categ}</h4>
                <h1>{product.name}</h1>
                <p>{product.descr}</p>
                <p>{product.price}</p>
            </div>
        </article>
    );
};