import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";
import {dataBase} from "../../../Firebase/firebase.js"

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

export const ItemDetailContainer = () => {
  //utilizao useState para registrar y mostrar los cambios en pantalla.
  const [prodById, setProdById] = useState({});
  //obtengo un valor id por useParams para poder capturar la ruta a mostrar
  const { id } = useParams();
  //Creo una funcion para obtener mis datos, los cuales se resuelven en una
  //promise con timeOut para emular el backend.
  const getAllProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            [
              {
                id: "1",
                img: geforce1,
                name: "GIGABYTE - GeForce RTX 3070",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
                price: "250",
              },
              {
                id: "2",
                img: mother1,
                name: "Sample Motherboard",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "3",
                img: ryzen1,
                name: "AMD Ryzen 9 3600x",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "4",
                img: built1,
                name: "'Titan' gaming PC",
                stock: 10,
                min:1,
                category: "pre-built",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "5",
                img: geforce2,
                name: "MSI Ventus x3 GeForce RTX 3060",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "6",
                img: aio1,
                name: "AIO Liquid cooling w/ temp monitor",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "7",
                img: built2,
                name: "'Yeti' editing/ streaming PC",
                stock: 10,
                min:1,
                category: "pre-built",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "8",
                img: ram1,
                name: "Corsair Vengance 16gb (2x8)",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
              {
                id: "9",
                img: mother2,
                name: "ROG Motherboard",
                stock: 10,
                min:1,
                category: "hardware",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price: "250",
              },
            ]
          ),
          //Simula tiempo de carga (1,5s)
        1500
      );
    });
  };

  //utilizo UseEffect para simplificar lo que tengo que hacer
  //primero llamo a la funcion que tiene la promise y utilizo .then para el caso de exito
  //luego al resultado de la promise (mi array de objetos), lo paso
  //como parametro a mi funcion de estado setProdById pero ya filtrados por
  //el valor de Id que tome de useParams, de esta manera ya mando directamente
  //el item que necesito mostrar, y es el unico que se guarda en mi constante
  //de estado.

  useEffect(() => {
    getAllProducts().then((data) => {
      setProdById(data.find(prod => prod.id === id));
    });
  }, []);

  //Para poder mostrar el loader y evaluar si mi objeto estaba inicializado (vacio)
  //al principio de la carga de la pagina, utilice la funcion Object.keys
  //si el valor es 0, o sea que no tiene nada, muestro el loader.
  //de lo contrario paso el producto a ItemDetail para que lo renderize.
  
  return  <section className="detailContainer">
	{ Object.keys(prodById).length === 0 ? (
    <div className="LoaderContainer">
      <Loader/>
    </div>
    ):(<ItemDetail product={prodById} />)
	
  }
 </section>

};

