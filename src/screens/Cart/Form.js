import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { dataBase } from "../../Firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

export const Form = ({ cartItems, itemsPrice, clear }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mailConfirmation, setMailConfirmation] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const createOrder = (e) => {
    e.preventDefault();

    const buyer = {
      name: name,
      phone: phone,
      mail: mail,
    };

    const itemsToUpdate = dataBase.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartItems.map((i) => i.item.id)
    );

    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch();
      const outOfStock = [];

      querySnapshot.docs.forEach((docSnapshot, id) => {
        if (docSnapshot.data().stock >= cartItems[id].quantity) {
          batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - cartItems[id].quantity,
          });
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      });

      if (outOfStock.length === 0) {
        const newOrderReference = dataBase.collection("orders").doc();

        const orderItems = cartItems.map((item) => {
          return {
            id: item.item.id,
            title: item.item.name,
            price: item.item.price,
            qty: item.quantity,
          };
        });

        batch.set(newOrderReference, {
          buyer: buyer,
          items: orderItems,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total: itemsPrice,
        });
        batch.commit().then(() => {
          dataBase
            .collection("orders")
            .orderBy("date", "desc")
            .limit(1)
            .get()
            .then((querySnapshot) => {
              setOrderNumber(querySnapshot.docs[0].id)
              setRedirect(true);
              clear();
            });
        });
      }
    });
  };

  return<>
      {redirect ? (
        <Redirect to={`/thankyou/${orderNumber}`} />
      ) : (
        <form onSubmit={createOrder}>
          <p>
            <label className="formLabel">Name:</label>
            <br></br>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name Here"
              id="name"
              type="text"
              autoComplete="name"
              enterKeyHint="next"
              required
              autoFocus
            />
          </p>
          <p>
            <label className="formLabel">Phone number:</label>
            <br></br>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+54 911 68228048"
              id="phone"
              type="tel"
              autoComplete="phone"
              enterKeyHint="next"
            />
          </p>
          <p>
            <label className="formLabel">E-Mail:</label>
            <br></br>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="yourmail@example.com "
              id="mail"
              type="email"
              autoComplete="email"
              enterKeyHint="next"
            />
          </p>
          <p>
            <label className="formLabel">E-mail confirmation:</label>
            <br></br>
            <input
              value={mailConfirmation}
              onChange={(e) => setMailConfirmation(e.target.value)}
              placeholder="yourmail@example.com "
              id="mail"
              type="email"
              autoComplete="email"
              enterKeyHint="done"
            />
          </p>
          <div className="purchaseBtnContainer">
            <button
              className="endPurchase"
              type="submit"
              disabled={
                name === "" ||
                phone === "" ||
                mail === "" ||
                mailConfirmation !== mail
              }
            >
              End purchase
            </button>
          </div>
        </form>
      )}
    </>
};
