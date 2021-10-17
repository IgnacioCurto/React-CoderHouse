import { React } from "react";
import { Switch, Route } from "react-router-dom";
import { ItemListContainer } from "../components/Items/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/Items/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../components/Cart/Cart";
import { ThankYou } from "../components/ThankYou";
import { EmptyPageComponent } from "../components/EmptyPageComponent/EmptyPageComponent.js";

export const Routes = () => {
return <Switch>
    <Route exact path="/">
        <ItemListContainer />
    </Route>
    <Route path="/category/:id">
        <ItemListContainer />
    </Route>
    <Route path="/category/:id">
        <ItemDetailContainer />
    </Route>
    <Route path="/cart">
        <Cart />
    </Route>
    <Route path="/thankyou/:orderId">
        <ThankYou />
    </Route>
    <Route>
        <EmptyPageComponent
            className="emptyCart"
            imgUrl="https://i.ibb.co/zbgW6w8/Artboard-1-2x.png"
            altText="404"
            h1="Ooops, esta página no existe"
            link="/"
            btnText="Volver al Home"
        />
    </Route>
    </Switch>
};
