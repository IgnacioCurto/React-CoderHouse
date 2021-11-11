import React, { useContext } from "react";
import { CartContext } from "../components/CartContext.js";
import { Link } from "react-router-dom";
import "../styles.css";
import deleteIcon from "../components/delete.svg";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);

  const itemsQty = cartItems.reduce(
    (total, products) => total + products.quantity,
    0
  );
  const itemsPrice = cartItems.reduce(
    (total, products) => total + products.item.price * products.quantity,
    0
  );

  return (
    <div className="cartContainer">
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <p className="sad">:[</p>
          <h1>Your shopping cart is empty</h1>
          <Link to="/">
            <button className="cartButton">Back to home</button>
          </Link>
        </div>
      ) : (
        <div className="cartContent">
          <h1 className="cartTitle">Mi shopping cart</h1>
          <div className="cartItemList">
            {cartItems.map((products, i) => (
              <div key={i} className="itemRow">
                <div className="deleteCartItem">
                  <button onClick={(e) => removeItem(products)}>
                    <img src={deleteIcon} alt="delete icon"></img>
                  </button>
                </div>
                <div className="cartImageText">
                  <img src={products.item.img} alt={products.item.alt}></img>
                </div>
                <div className="itemTitle">
                  <h4>{products.item.name}</h4>
                </div>
                <div className="subtotal">
                <p>x {products.quantity}</p>
                <p>${products.item.price * products.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cartTotal">
            <h2>Subtotal</h2>
            <div className="totalInfo">
              <p>Products: {itemsQty}</p>
              <p>Total: ${itemsPrice.toLocaleString("en")}</p>
            </div>
            <button>End purchase</button>
          </div>
        </div>
      )}
    </div>
  );
};
