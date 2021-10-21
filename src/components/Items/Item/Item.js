import React from "react";
import { WishWidget } from "../../NavBar/WishWidget/WishWidget.js";
import { TagWidget } from "../../NavBar/TagWidget/TagWidget.js";
import {Link} from "react-router-dom";


export const Item = ({ item }) => {
  //Este es un componente funcional dummy por lo que lo unico
  //que hace es mostrar lo que le pasaron, recibe un item y 
  //renderiza los valores que el objeto contiene.
  return (
    <div className="card">
      <img className="prodImg" src={item.img} alt={item.alt}></img>
      <h3 className="prodTitle">{item.name}</h3>
      <p className="descr">{item.description}</p>
      <div className="pricediv">
        <TagWidget />
        <p className="price">{item.price}</p>
      </div>
      <div className="cardbuttons">
        <Link to={`/item/${item.id}`}><button className="buyItem">See more</button></Link>
        <WishWidget />
      </div>

      
    </div>
  );
};
