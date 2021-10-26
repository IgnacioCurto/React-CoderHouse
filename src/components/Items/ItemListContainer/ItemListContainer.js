import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "./ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { firestore} from "../../../Firebase/firebase.js"
import { Loader } from "../../Loader.js";

export const ItemListContainer = () => {
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
          const filteredCollection = itemCollection.where("category", "==", id);
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

  return <>
      <div className="itemListContainer">
        <section>
          <h1>Your <span>custom</span> PC</h1>
          <p>
            Either you'll go on adventures in your favorite videogame or render beautiful art pieces,
            <br></br> a <span>custom made</span> build will suit your everyday needs.
          </p>
        </section>
        {items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <div className="LoaderContainer">
            <Loader/>
          </div>
        )}
      </div>
    </>
};
