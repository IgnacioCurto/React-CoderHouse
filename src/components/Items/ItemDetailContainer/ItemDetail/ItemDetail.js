import { React,useContext,useState } from "react";
import "../../../../styles.css";
import { TagWidget } from "../../../NavBar/TagWidget/TagWidget.js";
import { Link } from "react-router-dom";
import {ItemCount} from "../../ItemCount/ItemCount.js";
import {CartContext} from "../../../CartContext.js"



export const ItemDetail = ({ product }) => {
  //este componente tambien es dummy por lo que recibe
  //solamente el producto ya filtrado por el id
  //lo unico que le agregue aca fue un link a la categoria
  //por si se quiere navegar desde el detalle a otros productos similares.

  //este componente basicamente muestra el contador de productos
  //cuando la variable de estado esta en falso, esto quiere decir que no
  //estoy yendo a Finalizar la compra, cuando clickeo en agregar al carrito
  // cambio la variable a true, lo que significa que tengo que mostrar
  //el otro boton y dejar de mostrar el contador
  const [endPurchase, showEndPurchase]=useState(false);
  const { addItem } = useContext(CartContext);
  const onAdd = (cantItems) => {
  showEndPurchase(true);
  addItem(product, cantItems)
  }
  return (
    <article className="productDetail">
      <img className="prodimg" src={product.img}/>
      <div className="prodinfo">
        <Link to={`/category/${product.category}`}>
          <h4>{product.category}</h4>
        </Link>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="pricediv">
          <TagWidget />
          <h5>${product.price.toLocaleString("en")}</h5>
        </div> 
        {endPurchase?(
          <div className="stockContainer">
          <Link to="/cart">
            <button className="purchaseButton">Go to checkout</button>
          </Link>
          <br></br>
          <Link to={`/category/${product.category}`}>
            <button className="backButton" onClick={(e) => showEndPurchase(false)}>Back</button>
          </Link>
        </div>
        ):(<ItemCount currentstock={product.stock} initial={1} onAdd={onAdd}/> 
        )
        }
      </div>
    </article>
  );
};
