import { React } from "react";
import {NavBar} from './components/NavBar/NavBar.js'
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './components/Routes.js';
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes />
          </CartProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
