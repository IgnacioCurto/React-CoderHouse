import { React } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles.css'

export const ThankYou = () => {
  const { orderId } = useParams();

  return (
    <div className="emptyCart">
      <p className="smiley">:)</p>
      <h1>Thank you for your purchase!</h1>
      <h3>Your order tracking code is <span>{orderId}</span>, you'll receive a confirmation e-mail to </h3>
      <Link to="/">
        <button className="cartButton">Back to home</button>
      </Link>
    </div>
  )
};
