import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import { Link } from "react-router-dom";
import "../../styles.css";
import { Form } from "./Form.js";
import { CartItemList } from "./CartItemList.js";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { clear } = useContext(CartContext);

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
        <p className="smiley">:(</p>
        <h1>Your shopping cart is empty</h1>
        <Link to="/">
          <button className="cartButton">Go back home</button>
        </Link>
      </div>
      ) : (
        <div className="cartContent">
          <h1 className="cartTitle">Mi shopping cart</h1>
          <div className="cartItemList">
            <CartItemList cartItems={cartItems} removeItem={removeItem} />
          </div>
          
          <div className="cartTotal">
            <h2>Summary</h2>
            <div className="totalInfo">
              <p>Products: {itemsQty}</p>
              <p>Total: ${itemsPrice.toLocaleString("en")}</p>
              <p>Shipping: <span>FREE</span></p>
            </div>
          </div>
          <section className="purchase">
            <div className="userInfo">
              <h2>Shipping info:</h2>
              <Form
                cartItems={cartItems}
                itemsPrice={itemsPrice}
                clear={clear}
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
