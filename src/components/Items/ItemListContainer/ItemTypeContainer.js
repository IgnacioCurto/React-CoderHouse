import React, { useEffect, useState } from "react";
import "../../../styles.css";
import { ItemList } from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { firestore } from "../../../Firebase/firebase.js";
import { getFirestore } from "../../../Firebase/firebase.js";
import { Loader } from "../../Loader";
import {item} from "../Item/Item"

export const ItemTypeContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = firestore.collection("items");

    itemCollection.get().then((response) => {
      if (response.size === 0) {
        console.log("no results");
      } else {
        if (id === undefined) {
          const itemsDB = response.docs.map((element) => {
            return { ...element.data(), id: element.id };
          });
          setItems(itemsDB);
        } else {
          const filteredCollection = itemCollection.where("type", "==", id);
          filteredCollection.get().then((response) => {
            const filteredItems = response.docs.map((element) => {
              return { ...element.data(), id: element.id };
            });
            setItems(filteredItems);
          });
        }
      }
    });
  }, [id]);


  return (
    <>
      <div className="itemListContainer">
        <section>
          <h1>
            Our <span>stock</span>:
          </h1>
        </section>
        {items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <div className="LoaderContainer">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};
