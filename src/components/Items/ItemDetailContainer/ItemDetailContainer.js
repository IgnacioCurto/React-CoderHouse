import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader.js";
import { firestore } from "../../../Firebase/firebase.js";


export const ItemDetailContainer = () => {
  const [docExists, setDocExists] = useState(true);
  const [prodById, setProdById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = firestore.collection("items");
    const item = itemCollection.doc(id);

    item.get().then((doc) => {
      if (!doc.exists) {
        setDocExists(false);
      }
      setProdById({ id: doc.id, ...doc.data() });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>
      <section className="detailContainer">
        {Object.keys(prodById).length === 0 ? (
          <div className="LoaderContainer">
            <Loader />
          </div>
        ) : (
          <ItemDetail product={prodById} />
        )}
      </section>
    </>
};

