import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";
import { dataBase } from "../../../Firebase/firebase.js"

//Cargo las imagenes de los productos
import geforce1 from '../../img/GeForce.png'
import geforce2 from '../../img/GeForce2.png'
import ryzen1 from '../../img/ryzen1.png'
import built1 from '../../img/built1.png'
import built2 from '../../img/built2.png'
import mother1 from '../../img/mother1.png'
import mother2 from '../../img/mother2.jpg'
import aio1 from '../../img/aio1.jpg'
import ram1 from '../../img/ram1.png'

export const ItemListContainer = () => {
  //Obtengo el valor de la categoria en la que estoy con useParams()
  const { id } = useParams();
  //utilizo UseState para controlar los cambios en pantalla
  //lo inicializo en [] ya que va a contener un array con
  //mis objetos -> items a vender
  const [items, setItems] = useState([]);
  //Creo una funcion getItems que crea una promise donde  
  //se obtienen mis datos, y la resuelvo con un
  //setTimeOut para emular el pedido al backend

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
        resolve([
          {
            id: "1",
            img: geforce1,
            name: "GIGABYTE - GeForce RTX 3070",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
            price: "$250",
          },
          {
            id: "2",
            img: mother1,
            name: "Sample Motherboard",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "3",
            img: ryzen1,
            name: "AMD Ryzen 9 3600x",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "4",
            img: built1,
            name: "'Titan' gaming PC",
            stock: true,
            category: "pre-built",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "5",
            img: geforce2,
            name: "MSI Ventus x3 GeForce RTX 3060",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "6",
            img: aio1,
            name: "AIO Liquid cooling w/ temp monitor",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "7",
            img: built2,
            name: "'Yeti' editing/ streaming PC",
            stock: true,
            category: "pre-built",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "8",
            img: ram1,
            name: "Corsair Vengance 16gb (2x8)",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
          {
            id: "9",
            img: mother2,
            name: "ROG Motherboard",
            stock: true,
            category: "hardware",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "$250",
          },
        ]),
        //Simula tiempo de carga (1,5s)
        1500
      );
    });
  };

 //uso useEffect para guardar los datos en mi variable de estado
 //llamo a getItems y utilizo .then porque me interesa el caso en que 
 //la promise se resolvio correctamente.

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, [id]); //aca utilizo ID para que se dispare useEffect cada vez que
  //mi valor id (obtenido por useparams) cambie, o sea cada vez que 
  //tenga que cargar otra categoria.

  //en el return evaluo si mi array items (con mis objetos) tiene algo
  //o si solo esta inicializado, en el caso de tener contenido evaluo
  //si id es undefined (el caso de estar en el home localhost:3000/), 
  //si es asi cargo todos los items a mostrar.
  //si id no es undefined (o sea, estoy yendo a una ruta)filtro los productos
  // por la categoria correspondiente. Y se los paso a ItemList ya filtrados
  // En el caso de que el array este vacio cargo un loader hasta que tenga algo.

  return (
    <>
      <div className="itemListContainer">
        <section>
          <h1>Your <span>custom</span> PC</h1>
          <p>
            Either you'll go on adventures in your favorite videogame or render beautiful art pieces,
            <br></br> a <span>custom made</span> build will suit your everyday needs.
          </p>
        </section>
        {items.length > 0 ? (
          id === undefined ? (
            <ItemList items={items} />
          ) : (
            <ItemList items={items.filter((item) => item.category === id)} />
          )
        ) : (
          <div className="LoaderContainer">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};
