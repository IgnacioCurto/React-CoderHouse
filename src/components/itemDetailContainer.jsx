import React, { useEffect, useState } from "react";
import { ItemDetail } from "./itemDetail";
import geforce1 from '../img/items/GeForce1.png'
import geforce2 from '../img/items/GeForce2.png'

export const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const showProd = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            [{id:1, 
              img: geforce1,
              name: 'ASUS - TUF gaming GeForce RTX 3060', 
              stock: true, 
              category:'GPU',
              description: 'Esta es la descripción del producto', 
              price:'$240,000'},
              {
              id:"2", 
              img: geforce2,
              name: 'GIGABYTE - GeForce RTX 3080', 
              stock: true, 
              category:'GPU',
              description: 'Esta es la descripción del producto', 
              price:'$450,000'}
              ]
          ),
        2000
      );
    });
  };

  useEffect(() => {
    showProd().then((data) => {
      setProducts(data);
    });
  }, []);

  const {id} = useParams();
  
  const [prodById, setProdById] = useState();
  
  useEffect(() => {
    setProdById(products.find(prod => prod.id === id));
    console.log(prodById);
    }, 
    []);
  
  return (
    <section className="detailContainer">
      <ItemDetail product={prodById}/>
    </section>
  );
};